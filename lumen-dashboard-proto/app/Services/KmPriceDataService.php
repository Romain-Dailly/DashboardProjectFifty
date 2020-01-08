<?php

namespace App\Services;

use App\Libs\SwaggerTrait;

use App\Models\KmPrice;
use App\Models\LightSeizedShippingOrder;
use App\Models\PresetsFilter;

use App\Services\GetSeizedShippingOrdersService;

use Illuminate\Support\Collection;



class KmPriceDataService {


    use SwaggerTrait;

    private $getSeizedShippingOrdersService;
    private $applyFiltersOnDataService;


    function __construct(GetSeizedShippingOrdersService $getSeizedShippingOrdersService, ApplyFiltersOnDataService $applyFiltersOnDataService) 
    {
        $this->getSeizedShippingOrdersService = $getSeizedShippingOrdersService;
        $this->applyFiltersOnDataService = $applyFiltersOnDataService;
    }

    /**
     *  Get data from GetSeizedShippingOrdersService and filter and normalize it for turnover
     * @param token // for authorization access and get user
     * @param Request
     * @return KmPrice
     */
    function getFilteredAndNormalizedData($token, $good_type, $truck_types, $distances, $timeFormat, $year, $month)
    {
        $allOrders = $this->getSeizedShippingOrdersService->getSeizedOffersFromApiInte($token);
        $filteredOrders = $this->applyFiltersOnDataService->applyFilters($good_type, $truck_types, $distances, $timeFormat, $year, $month, $allOrders);
        $computedOrders = $this->computeData($filteredOrders);
        
        return $computedOrders;
    }


    /**
     *  Normalize data to be as expected
     * @param LightSeizedShippingOrder[]
     * @return KmPrice
     */
    function computeData($orders)
    { 

        // Separate input data
        $dates = $orders['dates'];
        $orders = $orders['orders'];

        // Temporary array where we will push data, size depending of $dates array length
        $temporarySeizedOrders = [];
        
        // Group orders by years or months
        for ($i=0;$i<count($dates);$i++) 
        {   

            $temporarySeizedOrders[$i] = collect($orders)->filter(function ($item, $key) use ($i, $dates)
            {
                // if format is year
                if (count($dates) === 12) 
                {
                    return date_parse(collect($item['created_at']))['month'] === $i+1;  
                // or format is month
                } else 
                {
                    return date_parse(collect($item['created_at']))['day'] === $i+1;
                }
            })->all();

        }
        // Get linearMeterKmPrices in linearMeter.km for each period cell
        $linearMeterKmPrices = collect($temporarySeizedOrders)->map(function($item, $key) 
        {
            if (count($item) >= 1) 
            {
                $unformatedResult = collect($item)->map(function ($item2, $key2)
                {
                    if ($item2['seized_order_route_distance'] !== null)
                    {
                        return $item2['seized_price'] / ($item2['seized_order_route_distance'] / 100) / $item2['product_linear_footage'];
                    } else 
                    {
                        return 0; 
                    } 
                })->sum()/count($item);

                return (float)number_format($unformatedResult, 4);

            } else 
            {
                return 0;
            }
        })->values()->all();
        
        // Get weightKmPrices in ton.km for each period cell
        $weightKmPrices = collect($temporarySeizedOrders)->map(function($item, $key) 
        {

        if (count($item) >= 1) 
        {
            $unformatedResult = collect($item)->map(function ($item2, $key2)
            {
                if ($item2['seized_order_route_distance'] !== null)
                {
                    return $item2['seized_price'] / ($item2['seized_order_route_distance'] / 100) / $item2['product_total_weight'];
                } else 
                {

                    return 0; 

                } 
            })->sum()/count($item);

            return (float)number_format($unformatedResult, 4);

        } else 
        {
            return 0;
        }

        })->values()->all();

        // Total price for all orders in linear meters
        $averageLinearMeterKmPrices = collect($linearMeterKmPrices)->sum()/count($linearMeterKmPrices);

        // Total price for all orders in tons
        $averageWeightKmPrices = collect($weightKmPrices)->sum()/count($weightKmPrices);


        $newData = [
        'dates' => $dates,
        'linearMeterKmPrices' => $linearMeterKmPrices,
        'weightKmPrices' => $weightKmPrices,
        'averageWeightKmPrices' => number_format($averageWeightKmPrices, 4),
        'averageLinearMeterKmPrices' => number_format($averageLinearMeterKmPrices, 4),
        ];

        return KmPrice::make($newData);
        
    }

}
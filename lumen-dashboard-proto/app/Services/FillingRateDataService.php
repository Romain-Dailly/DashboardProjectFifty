<?php

namespace App\Services;

use App\Libs\SwaggerTrait;

use App\Models\FillingRate;
use App\Models\LightSeizedShippingOrder;
use App\Models\PresetsFilter;

use App\Services\GetSeizedShippingOrdersService;

use Illuminate\Support\Collection;



class FillingRateDataService {


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
     * @return FillingRate
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
     * @return FillingRate
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
                    return date_parse(collect($item['created_at']))['month'] === $i + 1;  
                // or format is month
                } else 
                {
                    return date_parse(collect($item['created_at']))['day'] === $i + 1;
                }
            })->all();
        }

        // Get linearFillingRates in percents for each period cell
        $linearFillingRates = collect($temporarySeizedOrders)->map(function($item, $key) 
        {
            if (count($item) >= 1) 
            {
                $unformatedResult = collect($item)->map(function ($item2, $key2)
                {
                    if ($item2['search_product_length_max'] !== null)
                    {
                        return ($item2['product_linear_footage'] * 100) / $item2['search_product_length_max'];
                    } else 
                    {
                        return ($item2['product_linear_footage'] * 100) / env('PRODUCT_LENGTH_MAX');
                    }
                })->sum()/count($item);

                return (float)number_format($unformatedResult, 2);

            } else 
            {
                return 0;
            }
        })->values()->all();
        
        // Get weightFillingRates in percents for each period cell
        $weightFillingRates = collect($temporarySeizedOrders)->map(function($item, $key) 
        {
            if (count($item) >= 1) 
            {
                $unformatedResult = collect($item)->map(function ($item2, $key2)
                {
                    if ($item2['product_total_weight'] !== null)
                    {
                        return ($item2['product_total_weight'] * 100) / $item2['search_product_weight_max'];
                    } else 
                    {
                        return ($item2['product_total_weight'] * 100) / env('PRODUCT_WEIGHT_MAX'); 
                    } 
                })->sum()/count($item);

                return (float)number_format($unformatedResult, 2);
            } else 
            {
                return 0;
            }
        })->values()->all();

        // Total average of linearFillingRates
        $averageLinearFillingRates = collect($linearFillingRates)->sum()/count($linearFillingRates);

        // Total average of weightFillingRates
        $averageWeightFillingRates = collect($weightFillingRates)->sum()/count($weightFillingRates);


        $newData = [
        'dates' => $dates,
        'linearFillingRates' => $linearFillingRates,
        'weightFillingRates' => $weightFillingRates,
        'averageLinearFillingRates' => number_format($averageLinearFillingRates, 2, ',', ''),
        'averageWeightFillingRates' => number_format($averageWeightFillingRates, 2, ',', ''),
        // 'orders' => $newOrders
        ];

        return FillingRate::make($newData);

    }

}
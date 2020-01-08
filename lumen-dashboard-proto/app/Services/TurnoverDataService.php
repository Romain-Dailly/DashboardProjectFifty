<?php

namespace App\Services;
use Illuminate\Support\Collection;

use App\Libs\SwaggerTrait;

use App\Models\Turnover;
use App\Models\LightSeizedShippingOrder;
use App\Models\PresetsFilter;

use App\Services\GetSeizedShippingOrdersService;



class TurnoverDataService {


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
     * @return Turnover
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
     * @return Turnover
     */
    function computeData($orders)
    { 

        // Separate input data
        $dates = $orders['dates'];
        $orders = $orders['orders'];

        // Total price for all offers
        $totalSeizedOrdersSellPrice = collect($orders)->sum('seized_price');

        // Temporary array where we will push data, size depending of $dates array length
        $temporarySeizedOrders = [];
        
        // Group orders by years or months
        for ($i = 0; $i < count($dates); $i++) 
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

        // Sum all groups data 
        $seizedOrdersSellPrices = collect($temporarySeizedOrders)->map(function($item, $key) 
        {
            return (float)number_format(collect($item)->sum('seized_price'), 2, ',','');
        })->values()->all();

        $newData = [
        'dates' => $dates,
        'seizedOrdersSellPrices' => $seizedOrdersSellPrices,
        'totalSeizedOrdersSellPrice' => $totalSeizedOrdersSellPrice,
        ];

        return Turnover::make($newData);
        
    }

}
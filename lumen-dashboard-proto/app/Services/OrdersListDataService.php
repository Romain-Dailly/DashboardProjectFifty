<?php

namespace App\Services;

use App\Libs\SwaggerTrait;

use App\Models\LightMinimumOrder;
use App\Models\LightSeizedShippingOrder;
use App\Models\PresetsFilter;

use App\Services\GetSeizedShippingOrdersService;

use Illuminate\Support\Collection;



class OrdersListDataService {


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
     * @return LightMinimumOrder[]
     */
    function getFilteredAndNormalizedData($token, $good_type, $truck_types, $distances, $timeFormat, $year, $month, $index)
    {

        $allOrders = $this->getSeizedShippingOrdersService->getSeizedOffersFromApiInte($token);
        $filteredOrders = $this->applyFiltersOnDataService->applyFilters($good_type, $truck_types, $distances, $timeFormat, $year, $month, $allOrders);
        $computedOrders = $this->computeData($filteredOrders, $index);
        
        return $computedOrders;

    }


    /**
     *  Normalize data to be as expected
     * @param LightSeizedShippingOrder[]
     * @return LightMinimumOrder[]
     */
    function computeData($orders, $index)
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
        // Get orders minimum infos by period cell
        $lightMinimumOrders = collect($temporarySeizedOrders)->map(function ($item, $key)
        {
        if (count($item)>0) 
        {
            return collect($item)->map(function ($item2, $key2) 
            {
                $lightMinimumOrder = LightMinimumOrder::make($item2);
                return $lightMinimumOrder;
            })->values();
        }
        return [];

        })->values()->all();

        return $lightMinimumOrders[$index];

    }

}
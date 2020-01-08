<?php

namespace App\Services;

use App\Models\OrdersCount;
use App\Models\LightSeizedShippingOrder;
use App\Models\PresetsFilter;

use App\Libs\SwaggerTrait;

use App\Services\GetSeizedShippingOrdersService;

use Illuminate\Support\Collection;



class OrdersCountDataService {


    use SwaggerTrait;

    private $getSeizedShippingOrdersService;
    private $applyFiltersOnDataService;

    function __construct(GetSeizedShippingOrdersService $getSeizedShippingOrdersService, ApplyFiltersOnDataService $applyFiltersOnDataService) 
    {

        $this->getSeizedShippingOrdersService = $getSeizedShippingOrdersService;
        $this->applyFiltersOnDataService = $applyFiltersOnDataService;

    }

    /**
     *  Get data from GetSeizedShippingOrdersService and filter and compute it for turnover
     * @param token // for authorization access and get user
     * @return OrdersCount
     */
    function getFilteredAndNormalizedData($token, $good_type, $truck_types, $distances, $timeFormat, $year, $month)
    {
        $distancesSteps = [env('SHORT_DISTANCES_MAX_DISTANCE'), env('LONG_DISTANCES_MIN_DISTANCE')];
        $allOrders = $this->getSeizedShippingOrdersService->getSeizedOffersFromApiInte($token);
        $filteredOrders = $this->applyFiltersOnDataService->applyFilters($good_type, $truck_types, $distances, $timeFormat, $year, $month, $allOrders);

        $computedOrders = $this->computeData($filteredOrders, $distancesSteps);
        
        return $computedOrders;
    }


    /**
     *  Compute data to be as expected
     * @param LightSeizedShippingOrder[]
     * @return OrdersCount
     */
    function computeData($orders, $distancesSteps)
    { 

        $dates = $orders['dates'];
        $orders = $orders['orders'];

        // Total orders count
        $seizedOrdersTotalCount = count($orders);

        // Count all short distances orders
        $seizedOrdersShortDistancesCount = count(collect($orders)->whereBetween('seized_order_route_distance', [0, $distancesSteps[0]]));

        // Count all middle distances orders
        $seizedOrdersMiddleDistancesCount = count(collect($orders)->whereBetween('seized_order_route_distance', [$distancesSteps[0], $distancesSteps[1]]));
        
        // Count all long distances orders
        $seizedOrdersLongDistancesCount = count(collect($orders)->where('seized_order_route_distance', '>=', $distancesSteps[1]+1));
        
        // Prepare data to hydrate DataForOrdersCount model
        $newData = [
        'seizedOrdersShortDistancesCount' => $seizedOrdersShortDistancesCount,
        'seizedOrdersLongDistancesCount' => $seizedOrdersLongDistancesCount,
        'seizedOrdersMiddleDistancesCount' => $seizedOrdersMiddleDistancesCount,
        'seizedOrdersTotalCount' => $seizedOrdersTotalCount
        ];

        return OrdersCount::make($newData);

    }
  
}
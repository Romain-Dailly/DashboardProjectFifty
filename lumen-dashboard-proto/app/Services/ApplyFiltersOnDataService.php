<?php

namespace App\Services;

use App\Libs\SwaggerTrait;

use App\Models\LightSeizedShippingOrder;
use App\Models\PresetsFilter;

use App\Services\GetSeizedShippingOrdersService;

use Illuminate\Support\Collection;



class ApplyFiltersOnDataService {


    
	/**
	 * Filter orders with request filters
	 * @param PresetsFilter
	 * @param LightSeizedShippingOrder[]
	 * @return array(dates, LightSeizedShippingOrder[])
	 */
	function applyFilters($good_type, $truck_types, $distances, $timeFormat, $year, $month, $orders) 
	{

        $distancesSteps = [env('SHORT_DISTANCES_MAX_DISTANCE'), env('LONG_DISTANCES_MIN_DISTANCE')];

		$filteredOrders = $this->applyAllFilters($good_type, $truck_types, $distances, $timeFormat, $year, $month, $orders, $distancesSteps);

        
		return $this->addDatesArrayToOrders($filteredOrders, $timeFormat, $year, $month);

	}

 
    function applyAllFilters($good_type, $truck_types, $distances, $timeFormat, $year, $month, $orders, $distancesSteps) 
    {
        $filteredOrders = collect($orders)->filter(function ($item, $key) use ($good_type, $truck_types, $distances, $timeFormat, $year, $month, $distancesSteps)
        {
            if ($distances === 'all') 
            {
                if ($truck_types === 'all') 
                {
                    if ($good_type === 'all')
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year;
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return (date_parse(collect($item['created_at']))['year'] === (int)$year) &&
                            (date_parse(collect($item['created_at']))['month'] === (int)$month);
                        }
                    } else 
                    {
                        if ($timeFormat === 'year') 
                        {
                            return (date_parse(collect($item['created_at']))['year'] === (int)$year) &&
                            ($item['good_type'] === $good_type);
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return (date_parse(collect($item['created_at']))['year'] === (int)$year) &&
                            (date_parse(collect($item['created_at']))['month'] === (int)$month) &&
                            ($item['good_type'] === $good_type);
                        }
                    }                 
                } else 
                {
                    if ($good_type === 'all')
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            in_array($truck_types, $item['truck_types']);
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            in_array($truck_types, $item['truck_types']);
                        }
                    } else 
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            $item['good_type'] === $good_type;
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            $item['good_type'] === $good_type &&
                            in_array($truck_types, $item['truck_types']);
                        }
                    }
                }
            } else if ($distances === 'short')
            {
                if ($truck_types === 'all') 
                {
                    if ($good_type === 'all')
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            $item['seized_order_route_distance'] < $distancesSteps[0];
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            $item['seized_order_route_distance'] < $distancesSteps[0];
                        }
                    } else 
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            $item['good_type'] === $good_type &&
                            $item['seized_order_route_distance'] < $distancesSteps[0];
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            $item['good_type'] === $good_type &&
                            $item['seized_order_route_distance'] < $distancesSteps[0];
                        }
                    }
                } else 
                {
                    if ($good_type === 'all')
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            in_array($truck_types, $item['truck_types']) &&
                            $item['seized_order_route_distance'] < $distancesSteps[0];
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            in_array($truck_types, $item['truck_types']) &&
                            $item['seized_order_route_distance'] < $distancesSteps[0];
                        }
                    } else 
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year && $item['good_type'] === $good_type;
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            $item['good_type'] === $good_type &&
                            in_array($truck_types, $item['truck_types']) &&
                            $item['seized_order_route_distance'] < $distancesSteps[0];
                        }
                    }
                }
            } else if ($distances === 'middle') 
            {
                if ($truck_types === 'all') 
                {
                    if ($good_type === 'all')
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            $item['seized_order_route_distance'] > $distancesSteps[0] && 
                            $item['seized_order_route_distance'] < $distancesSteps[1];
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            $item['seized_order_route_distance'] > $distancesSteps[0] && 
                            $item['seized_order_route_distance'] < $distancesSteps[1];
                        }
                    } else 
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            $item['good_type'] === $good_type &&
                            $item['seized_order_route_distance'] > $distancesSteps[0] && 
                            $item['seized_order_route_distance'] < $distancesSteps[1];
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            $item['good_type'] === $good_type &&
                            $item['seized_order_route_distance'] > $distancesSteps[0] && 
                            $item['seized_order_route_distance'] < $distancesSteps[1];
                        }
                    }
                } else 
                {
                    if ($good_type === 'all')
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            in_array($truck_types, $item['truck_types']) &&
                            $item['seized_order_route_distance'] > $distancesSteps[0] && 
                            $item['seized_order_route_distance'] < $distancesSteps[1];
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            in_array($truck_types, $item['truck_types']) &&
                            $item['seized_order_route_distance'] > $distancesSteps[0] && 
                            $item['seized_order_route_distance'] < $distancesSteps[1];
                        }
                    } else 
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year && $item['good_type'] === $good_type;
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            $item['good_type'] === $good_type &&
                            in_array($truck_types, $item['truck_types']) &&
                            $item['seized_order_route_distance'] > $distancesSteps[0] && 
                            $item['seized_order_route_distance'] < $distancesSteps[1];
                        }
                    }
                }

            } else if ($distances === 'long') 
            {
                if ($truck_types === 'all') 
                {
                    if ($good_type === 'all')
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            $item['seized_order_route_distance'] > $distancesSteps[1];
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            $item['seized_order_route_distance'] > $distancesSteps[1];
                        }
                    } else 
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            $item['good_type'] === $good_type &&
                            $item['seized_order_route_distance'] > $distancesSteps[1];
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            $item['good_type'] === $good_type &&
                            $item['seized_order_route_distance'] > $distancesSteps[1];
                        }
                    }
                    
                } else 
                {
                    if ($good_type === 'all')
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            in_array($truck_types, $item['truck_types']) &&
                            $item['seized_order_route_distance'] > $distancesSteps[1];
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            in_array($truck_types, $item['truck_types']) &&
                            $item['seized_order_route_distance'] > $distancesSteps[1];
                        }
                    } else 
                    {
                        if ($timeFormat === 'year') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year && $item['good_type'] === $good_type;
                        }
                        else if ($timeFormat === 'month') 
                        {
                            return date_parse(collect($item['created_at']))['year'] === (int)$year &&
                            date_parse(collect($item['created_at']))['month'] === (int)$month &&
                            $item['good_type'] === $good_type &&
                            in_array($truck_types, $item['truck_types']) &&
                            $item['seized_order_route_distance'] > $distancesSteps[1];
                        }
                    }
                }
            }
        })->values()->toArray();

        return $filteredOrders;
    }

	/**
	 *  Filter Orders by good_type
	 * @param LightSeizedShippingOrder[]
	 * @return array(dates, LightSeizedShippingOrder[])
	 */
	function addDatesArrayToOrders($orders, $timeFormat, $year, $month) 
	{
		// Create an array of dates, a cell per month
		$dates = [];
        if ($timeFormat === 'year')
        {
            for ($i = 1; $i <= 12; $i++)
            {
                $dates[$i - 1] = str_pad($i, 2, "0", STR_PAD_LEFT);   
            }
		    return [
                'dates' => $dates,
                'orders' => $orders
		    ];
		} else if ($timeFormat === 'month')
		{
            // Get the month's number of days
            $daysInMonth = cal_days_in_month(CAL_GREGORIAN, (int)$month,(int)$year);
            
            // Create an array of dates, a cell per day
            for ($i = 1; $i <= $daysInMonth; $i++)
            {
                $dates[$i - 1] = str_pad($i, 2, "0", STR_PAD_LEFT); 
            }

            return [
                'dates' => $dates,
                'orders' => $orders
            ];
        } else 
        {
            $timeFormat = 'year';
            for ($i = 1; $i <= 12; $i++)
            {
                $dates[$i - 1] = str_pad($i, 2, "0", STR_PAD_LEFT);  
            }
		    return [
                'dates' => $dates,
                'orders' => $orders
		    ];
        }

	}

}
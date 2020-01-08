<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;

use App\Models\PresetsFilter;

use App\Services\OrdersListDataService;
use App\Services\GetSeizedShippingOrdersService;



class OrdersListController extends BaseController {


	/**
	 * Get data for sent filters
	 * @param Request
	 * @param OrdersListDataService
	 * @param userId
	 * @return LightMinimumOrder[]
	 */
	public function getNormalizedData(Request $request, OrdersListDataService $ordersListDataService, $userId) 
	{

		$token = $request->cookie('token');

		$this->validate($request, PresetsFilter::$inputRulesTogetData);

		if ($request->authenticatedUserId === (int) $userId)
		{

			return  $ordersListDataService->getFilteredAndNormalizedData($token, $request->good_type, $request->truck_types, $request->distances, $request->timeFormat, $request->year, $request->month, $request->index);

		} else
		{

			return abort(403, `You are not authorized to get orders list as user $userId`);
		}  

	}
  
}
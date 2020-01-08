<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Collection;
use Illuminate\Http\Request;

use App\Models\PresetsFilter;

use App\Services\TurnoverDataService;
use App\Services\GetSeizedShippingOrdersService;



class TurnoverController extends BaseController {


    /**
     * Get data for sent filters
     * @param Request
     * @param TurnOverDataService
     * @param userId
     * @return DataForTurnover
     */
    public function getNormalizedData(Request $request, TurnoverDataService $turnoverDataService, $userId) 
    {

        $token = $request->cookie('token');

        $this->validate($request, PresetsFilter::$inputRulesTogetData);

        if ($request->authenticatedUserId === (int) $userId)
        {

            return  $turnoverDataService->getFilteredAndNormalizedData($token, $request->good_type, $request->truck_types, $request->distances, $request->timeFormat, $request->year, $request->month);

        } else
        {

            return abort(403, `You are not authorized to get data for turnover as user $userId`);
        }  

    }
    
}
<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use App\Services\FiltersService;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;
use App\Models\PresetsFilter;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;


class FiltersController extends BaseController {   

		/**
	 * Get all user filters via FiltersService
	 * @param Request
	 * @param userId
	 * @return PresetFilters
	 * 
	 * */   
	public function index(Request $request, FiltersService $FiltersService, $userId) 
	{
		
		if (((int)$userId === $request->authenticatedUserId) || ($request->user_type === "admin"))
		{
				return $FiltersService->getFilters($userId);

		} else
		{
				return abort(403, `You are not authorized to get filters from user $userId`);
		}

	}

	/**
	 * Create a new filter via FiltersService
	 * @param Request
	 * @param userId
	 * @return PresetFilters
	 * 
	 * */   
	public function create(Request $request, FiltersService $FiltersService, $userId)
	{

		$this->validate($request, PresetsFilter::$inputRules);
		
		if (((int)$userId === $request->authenticatedUserId) || ($request->user_type === 'admin'))
		{
				return  $FiltersService->createFilter($request);

		} else
		{
				return abort(403, `You are not authorized to create filter as user $userId`);
		}

	}
	
		/**
	 * Update a filter via FiltersService
	 * @param Request
	 * @param userId
	 * @return PresetFilters
	 * 
	 * */   
	public function update(Request $request, FiltersService $FiltersService, $userId)
	{

		$inputRulesWithId = PresetsFilter::$inputRules;

		$inputRulesWithId['id'] = 'required|integer';

		$this->validate($request, $inputRulesWithId);

		if (((int)$userId === $request->authenticatedUserId) || ($request->user_type === 'admin'))
		{
				return $FiltersService->updateFilter($request);
				
		} else
		{

				return abort(403, `You are not authorized to update filter $request->id.`);
		}

	}

		/**
	 * Delete a filter via FiltersService
	 * @param Request
	 * @return PresetFilters->id
	 * 
	 * */   
	public function destroy(Request $request, FiltersService $FiltersService, $userId, $id) 
	{

		$filterToDelete = PresetsFilter::findOrFail($id);

		if (((int)$userId === $request->authenticatedUserId) || ($request->user_type === 'admin'))
		{
				return $FiltersService->deleteFilter($id); 

		} else
		{
				return abort(403, `You are not authorized to delete filter $id.`);
		}

	}

}

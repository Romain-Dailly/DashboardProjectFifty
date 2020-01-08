<?php

namespace App\Services;

use App\Models\PresetsFilter;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

use Swagger\Client\Configuration;



class FiltersService {


    /** 
     * @param userId
     * @return PresetsFilter[]
     */
    public function getFilters($userId) 
    {
        
        return PresetsFilter::where('userId', $userId)->get();

    }

    /** 
     * @param Request
     * @return PresetsFilter[]
     */
    public function createFilter($request) 
    {

        $filter = PresetsFilter::create($request->all());

        return $filter;

    }

    /** 
     * @param Request
     * @return PresetsFilter[]
     */
    public function updateFilter($request) 
    {

        $presetsNewFilter = PresetsFilter::findOrFail($request['id']);
        $presetsNewFilter->update($request->all());

        return $presetsNewFilter;

    }

    /** 
     * @param id
     * @return id
     */
    public function deleteFilter($id) 
    {

        PresetsFilter::findOrFail($id)->delete();
        return $id;

    }

}
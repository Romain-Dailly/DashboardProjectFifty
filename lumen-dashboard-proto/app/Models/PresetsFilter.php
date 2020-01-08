<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class PresetsFilter extends Model {


    
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'userId',
        'created_at',
        'updated_at',
        'filterName',
        'timeFormat',
        'year',
        'month',
        'good_type',
        'truck_types',
        'distances',
        'vehicle',
        'customer',
        'driver',
        'agency'
    ];

    public static $inputRules = [
        'userId' => 'required|integer',
        'filterName' => 'required|string',
        'timeFormat' => 'required|string',
        'year' => 'required|string',
        'month' => 'required|string',
        'good_type'=>'required|string',
        'truck_types'=>'required|string',
        'distances' => 'required|string',
        'vehicle' => 'required|string',
        'customer' => 'required|string',
        'driver' => 'required|string',
        'agency' => 'string|nullable'
    ];

        public static $inputRulesTogetData = [
        'timeFormat' => 'required|string',
        'year' => 'required|string',
        'month' => 'required|string',
        'good_type'=>'required|string',
        'truck_types'=>'required|string',
        'distances' => 'required|string',
        'vehicle' => 'required|string',
        'customer' => 'required|string',
        'driver' => 'required|string',
        'agency' => 'string|nullable'
    ];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
    ];

    protected $table = 'filters';
  
}
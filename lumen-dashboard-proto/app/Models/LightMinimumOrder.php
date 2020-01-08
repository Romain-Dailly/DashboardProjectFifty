<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;




class LightMinimumOrder extends Model {


    
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'created_at',
        'shipper_company_name',
        'shipper_logo',
        'loading_point_address_city',
        'unloading_point_address_city',
        'loading_point_address_zone',
        'unloading_point_address_zone',
        'product_linear_footage',
        'product_total_weight',
        'seized_price',
        'good_type',
        'truck_types'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
    ];
  
}
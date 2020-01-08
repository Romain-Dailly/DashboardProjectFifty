<?php

namespace App\Models;

use Swagger\Client\Model\ProductGroup;
use Illuminate\Database\Eloquent\Model;
use App\Models\Route;



class LightSeizedShippingOrder extends Model {
  


    public $timestamps = false;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'shipper_company_name',
        'shipper_logo',
        'loading_point_address_city',
        'unloading_point_address_city',
        'loading_point_address_zone',
        'unloading_point_address_zone',
        'shipper_price',
        'seized_price',
        'created_at',
        'product_linear_footage',
        'product_total_weight',
        'product_total_volume',
        'good_type',
        'truck_types',
        'picking_date_start',
        'picking_date_end',
        'picking_time_start',
        'picking_time_end',
        'seized_order_route_distance',
        'search_id',
        'search_distance',
        'search_product_length_max',
        'search_product_weight_max',
        'complementary_informations'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
    ];
    
}

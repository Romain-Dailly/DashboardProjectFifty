<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class OrdersCount extends Model {


    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 
        'seizedOrdersLongDistancesCount',
        'seizedOrdersMiddleDistancesCount',
        'seizedOrdersShortDistancesCount',
        'seizedOrdersTotalCount'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
    ];
  
}
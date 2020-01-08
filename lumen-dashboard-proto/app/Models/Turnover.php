<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class Turnover extends Model {


    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 
        'dates',
        'seizedOrdersSellPrices',
        'totalSeizedOrdersSellPrice'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
    ];
    
}

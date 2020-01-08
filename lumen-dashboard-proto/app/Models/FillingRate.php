<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;




class FillingRate extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 
        'dates',
        'linearFillingRates',
        'weightFillingRates',
        'averageLinearFillingRates',
        'averageWeightFillingRates'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
    ];
  
}

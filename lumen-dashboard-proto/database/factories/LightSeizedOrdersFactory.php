<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/


$factory->define(App\Models\LightSeizedShippingOrder::class, function (Faker\Generator $faker) {

    // Linear meters for one palet
    $pal = 0.4;

    $kmPrice = $faker->randomFloat($nbMaxDecimals = 1, $min = 0.6, $max = 2);
    // Distance of the order
    $orderRoute = $faker->numberBetween($min = 20000 , $max = 900000);
    // Calculated price with distance and kmprice
    $seizedPrice = $kmPrice * ($orderRoute / 100);

    $linear_footage_max = $faker->numberBetween($min = 1 , $max = 33);
    $weight_max = $faker->numberBetween($min = 1 , $max = 28);

    return [
    'id'=>'00000'. '' .$faker->unique()->numberBetween($min=60000,$max=99999),
    'shipper_company_name' => 'B2P test',
    'shipper_logo' => 'https://www.b2pweb.com/bourse/img/logos/logo_b2p.png',
    'loading_point_address_city'=> 'fake_loading',
    'unloading_point_address_city'=> 'fake_unloading',
    'loading_point_address_zone'=> $faker->numberBetween($min = 1 , $max = 99),
    'unloading_point_address_zone'=> $faker->numberBetween($min = 1 , $max = 99),
    'shipper_price'=> $faker->numberBetween($min=$seizedPrice - 100,$max=$seizedPrice + 100),
    'seized_price'=> $seizedPrice,
    "product_linear_footage"=> (float)number_format($faker->numberBetween($min = 1 , $max = $linear_footage_max) * $pal, 2),
    "product_total_weight"=> $faker->numberBetween($min = 1 , $max = $weight_max),
    "product_total_volume"=> $faker->numberBetween($min = 1 , $max = 25),
    'good_type'=> 'general_merchandise',
    'truck_types'=> ['charges'],
    'picking_date_start'=> $faker->dateTimeThisYear($max = 'now', $timezone = null),
    'created_at'=> $faker->dateTimeThisYear($max = 'now', $timezone = null),
    'picking_date_end'=> $faker->dateTimeBetween($startDate = '-5 months', $endDate = 'now', $timezone = null),
    'picking_time_start'=> null,
    'picking_time_end'=> null,
    "seized_order_route_distance" => $orderRoute,
    "search_id" => $faker->numberBetween($min = 100000, $max = 1200000),
    'search_distance'=> $faker->numberbetween($min = $orderRoute , $max = 900000),
    'search_product_length_max'=> (float)number_format($linear_footage_max * $pal, 2),
    'search_product_weight_max' => $weight_max,
    'complementary_informations'=> []
    ];
});
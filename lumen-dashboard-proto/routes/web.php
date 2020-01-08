<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/**
 * Routes relative to filters access
 */
$router->post('filters/user/{userId}', 'FiltersController@create');
$router->put('filters/user/{userId}', 'FiltersController@update');
$router->get('filters/user/{userId}', 'FiltersController@index');
$router->delete('filters/{id}/user/{userId}', 'FiltersController@destroy');

/**
 * Routes to get data
 */
$router->post('turnover/user/{userId}', 'TurnoverController@getNormalizedData');
$router->post('orderscount/user/{userId}', 'OrdersCountController@getNormalizedData');
$router->post('kmprice/user/{userId}', 'KmPriceController@getNormalizedData');
$router->post('fillingrate/user/{userId}', 'FillingRateController@getNormalizedData');

$router->post('orderslist/user/{userId}', 'OrdersListController@getNormalizedData');
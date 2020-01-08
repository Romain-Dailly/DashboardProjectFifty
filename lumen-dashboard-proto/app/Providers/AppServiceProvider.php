<?php

namespace App\Providers;

use App\Services\ApplyFiltersOnDataService;
use App\Services\FillingRateDataService;
use App\Services\FiltersService;
use App\Services\GetSeizedShippingOrdersService;
use App\Services\KmPriceDataService;
use App\Services\OrdersCountDataService;
use App\Services\TurnOverDataService;

use Illuminate\Support\ServiceProvider;



class AppServiceProvider extends ServiceProvider {


  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {

    // $this->app->bind('App\Services\FiltersService', function ($app)
    // {
    //     return new FiltersService();
    // });
    // $this->app->bind('App\Services\GetSeizedShippingOrdersService', function ($app)
    // {
    //     return new GetSeizedShippingOrdersService();
    // });
    // $this->app->bind('App\Services\ApplyFiltersOnDataService', function ($app)
    // {
    //     return new ApplyFiltersOnDataService();
    // });
    // $this->app->bind('App\Services\TurnoverDataService', function ($app)
    // {
    //     return new TurnoverDataService(new GetSeizedShippingOrdersService(),new ApplyFiltersOnDataService());
    // });
    // $this->app->bind('App\Services\OrdersCountDataService', function ($app)
    // {
    //     return new OrdersCountDataService(new GetSeizedShippingOrdersService(),new ApplyFiltersOnDataService());
    // });
    // $this->app->bind('App\Services\KmPriceDataService', function ($app)
    // {
    //     return new KmPriceDataService(new GetSeizedShippingOrdersService(),new ApplyFiltersOnDataService());
    // });
    // $this->app->bind('App\Services\FillingRateDataService', function ($app)
    // {
    //     return new FillingRateDataService(new GetSeizedShippingOrdersService(),new ApplyFiltersOnDataService());
    // });

  }
  
}

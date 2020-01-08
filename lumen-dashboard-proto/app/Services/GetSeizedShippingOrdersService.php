<?php

namespace App\Services;

use App\Libs\SwaggerTrait;

use App\Models\LightSeizedShippingOrder;

use GuzzleHttp\Client;

use Illuminate\Support\Collection;

use Swagger\Client\Api\CarrierApi as SwaggerCarrierApi;
use Swagger\Client\Configuration;
use Swagger\Client\Model\SeizedShippingOrder;



class GetSeizedShippingOrdersService {


    use SwaggerTrait;


    /** Get all seizedShippingOrders from a user in token in FiftyTruck Api-Inte
     * @param token
     * @return LightSeizedShippingOrder[]
     */
    function getSeizedOffersFromApiInte($token) 
    {

        $config = new Configuration();
        $host_url =env('API_FIFTY_HOST_URL'); 
        
        $config->setHost($host_url);
        $config->setApiKey(0, $token);
        $config->setapiKeyPrefix(0, 'Bearer');

        $client = new Client([
        'headers'=>[
            'host'=>$config->getHost(),
            'authorization'=>$config->getApiKeyWithPrefix(0)
            ]
        ]);
        
        $swaggerCarrierApi = new SwaggerCarrierApi($client, $config, null);

        $seizedOffersFromApiInte = $swaggerCarrierApi->getSeizedShippingOrders();

        return array_merge($this->normalizeSeizedOffers($seizedOffersFromApiInte), $this->fakeLightSeizedShippingOrder());

    }

    /** Create instances of LightSeizedShippingOrder from SeizedShippingOrder
     * @param SeizedShippingOrder[]
     * @return LightSeizedShippingOrder[]
     */
    function normalizeSeizedOffers($orders) 
    {
        
        $castedOrders = $this->castToArray($orders);

        $lightSeizedShippingOrders = collect($castedOrders)->map(function($item, $key)
        {

            $item['product_linear_footage'] = $item['product_group']['linear_footage'];
            $item['product_total_weight'] = $item['product_group']['total_weight'];
            $item['product_total_volume'] = $item['product_group']['total_volume'];
            $item['search_product_length_max'] = $item['search_context']['shipping_order_search']['global_search_terms']['products_length_max'];

            $item['created_at'] = ($item['created_at'] === null) ? $item['created_at'] = $item['picking_date_start'] : $item['created_at'];

            if($item['search_context']['shipping_order_search']['global_search_terms']['products_weight_max'] === null) 
            {
                $item['search_product_weight_max'] = env('PRODUCT_WEIGHT_MAX');
            } else 
            {
                $item['search_product_weight_max'] = $item['search_context']['shipping_order_search']['global_search_terms']['products_weight_max'];
            }

            if ($item['route_with_toll']['distance'] === null) 
            {
                $item['seized_order_route_distance'] = null;
            } else 
            {
                $item['seized_order_route_distance'] = $item['route_with_toll']['distance'];
            }

            if ($item['search_context'] !== null) 
            {
                $item['search_id'] = $item['search_context']['shipping_order_search']['id'];
            }
            
            return LightSeizedShippingOrder::make($item);
        
        });

        return $lightSeizedShippingOrders->toArray();

    }


    /**
     * Generate faked LightSeizedShippingOrder[]
     * @return LightSeizedShippingOrder[]
     */
    function fakeLightSeizedShippingOrder() 
    { 

        return factory(LightSeizedShippingOrder::class, (int)env('FAKE_ORDERS_NUMBER'))->make()->toArray();    

    }

}

# Swagger\Client\FmsApi

All URIs are relative to *http://api-inte.fiftytruck.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDriverDetail**](FmsApi.md#getDriverDetail) | **GET** /fms/fleet/{carrierId}/driverExternalId/{driverExternalId} | Get driver detail
[**getFleet**](FmsApi.md#getFleet) | **GET** /fms/fleet/{carrierId} | Get fleet infos


# **getDriverDetail**
> \Swagger\Client\Model\FleetDriverActivity[] getDriverDetail($carrier_id, $driver_external_id)

Get driver detail



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\FmsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$carrier_id = 789; // int | Carrier id
$driver_external_id = "driver_external_id_example"; // string | Driver external id

try {
    $result = $apiInstance->getDriverDetail($carrier_id, $driver_external_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FmsApi->getDriverDetail: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_id** | **int**| Carrier id |
 **driver_external_id** | **string**| Driver external id |

### Return type

[**\Swagger\Client\Model\FleetDriverActivity[]**](../Model/FleetDriverActivity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getFleet**
> \Swagger\Client\Model\FleetDriver[] getFleet($carrier_id)

Get fleet infos



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\FmsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$carrier_id = 789; // int | Carrier id

try {
    $result = $apiInstance->getFleet($carrier_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FmsApi->getFleet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_id** | **int**| Carrier id |

### Return type

[**\Swagger\Client\Model\FleetDriver[]**](../Model/FleetDriver.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


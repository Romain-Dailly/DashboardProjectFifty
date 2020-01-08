# Swagger\Client\TmsApi

All URIs are relative to *http://api-inte.fiftytruck.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlanningEvents**](TmsApi.md#getPlanningEvents) | **GET** /tms/planning/events/fromDate/{fromDate}/toDate/{toDate} | Get list of events, resources
[**saveSettings**](TmsApi.md#saveSettings) | **POST** /tms/settings | Save new settings. USED FOR DEMO ONLY


# **getPlanningEvents**
> \Swagger\Client\Model\PlanningEventByResource[] getPlanningEvents($from_date, $to_date)

Get list of events, resources



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TmsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$from_date = "from_date_example"; // string | from which date to take the events. Format is ISO8601. Example: 2018-09-23T03:00:00.000Z
$to_date = "to_date_example"; // string | to which date to take the events. Format is ISO8601. It cannot be more than 7 days after dateFrom. Example: 2018-09-23T03:00:00.000Z

try {
    $result = $apiInstance->getPlanningEvents($from_date, $to_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TmsApi->getPlanningEvents: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from_date** | **string**| from which date to take the events. Format is ISO8601. Example: 2018-09-23T03:00:00.000Z |
 **to_date** | **string**| to which date to take the events. Format is ISO8601. It cannot be more than 7 days after dateFrom. Example: 2018-09-23T03:00:00.000Z |

### Return type

[**\Swagger\Client\Model\PlanningEventByResource[]**](../Model/PlanningEventByResource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **saveSettings**
> \Swagger\Client\Model\ShippingOrderSearch[] saveSettings()

Save new settings. USED FOR DEMO ONLY



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TmsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->saveSettings();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TmsApi->saveSettings: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\ShippingOrderSearch[]**](../Model/ShippingOrderSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


# Swagger\Client\SystemApi

All URIs are relative to *http://api-inte.fiftytruck.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentVersions**](SystemApi.md#getCurrentVersions) | **GET** /system/versions | Get current deployed versions
[**getFailedJobs**](SystemApi.md#getFailedJobs) | **GET** /failedJobs | Get failed jobs
[**getHealthcheck**](SystemApi.md#getHealthcheck) | **GET** /system/healthcheck | Get health status


# **getCurrentVersions**
> \Swagger\Client\Model\DeployedVersions getCurrentVersions()

Get current deployed versions



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\SystemApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getCurrentVersions();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemApi->getCurrentVersions: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\DeployedVersions**](../Model/DeployedVersions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getFailedJobs**
> getFailedJobs()

Get failed jobs



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\SystemApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $apiInstance->getFailedJobs();
} catch (Exception $e) {
    echo 'Exception when calling SystemApi->getFailedJobs: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getHealthcheck**
> getHealthcheck()

Get health status



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\SystemApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $apiInstance->getHealthcheck();
} catch (Exception $e) {
    echo 'Exception when calling SystemApi->getHealthcheck: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


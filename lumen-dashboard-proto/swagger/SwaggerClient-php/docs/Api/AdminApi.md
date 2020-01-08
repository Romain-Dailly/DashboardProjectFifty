# Swagger\Client\AdminApi

All URIs are relative to *http://api-inte.fiftytruck.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminLogin**](AdminApi.md#adminLogin) | **POST** /adminLogin | Login admin user


# **adminLogin**
> \Swagger\Client\Model\AdminUser adminLogin($login)

Login admin user



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\AdminApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$login = new \Swagger\Client\Model\Login(); // \Swagger\Client\Model\Login | Login and password matching an admin user

try {
    $result = $apiInstance->adminLogin($login);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AdminApi->adminLogin: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | [**\Swagger\Client\Model\Login**](../Model/Login.md)| Login and password matching an admin user |

### Return type

[**\Swagger\Client\Model\AdminUser**](../Model/AdminUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


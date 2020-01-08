# Swagger\Client\UserApi

All URIs are relative to *http://api-inte.fiftytruck.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkPushSubscription**](UserApi.md#checkPushSubscription) | **POST** /user/{userId}/checkPushSubscription | Get push fcm subscription for specified user and token
[**getUser**](UserApi.md#getUser) | **GET** /user/{userId} | Get user by id
[**logout**](UserApi.md#logout) | **POST** /logout | Logout current user with provided cookie
[**operatorAutocomplete**](UserApi.md#operatorAutocomplete) | **GET** /operator/autocomplete/{search} | Search operator from given string
[**patchUser**](UserApi.md#patchUser) | **PATCH** /user/{userId} | Patch user
[**pushSend**](UserApi.md#pushSend) | **POST** /user/{userId}/push/send | Send a sample message to test mobile AND web push
[**pushSubscribe**](UserApi.md#pushSubscribe) | **POST** /user/{userId}/push/subscribe/{platform} | Subscribe user to mobile push
[**pushUnsubscribe**](UserApi.md#pushUnsubscribe) | **POST** /user/{userId}/push/unsubscribe/{platform} | UNsubscribe user from mobile push
[**refreshToken**](UserApi.md#refreshToken) | **POST** /refreshToken | Refresh expired JWT token
[**resetPassword**](UserApi.md#resetPassword) | **POST** /resetPassword | Reset user password
[**webpushSubscribe**](UserApi.md#webpushSubscribe) | **POST** /user/{userId}/webpush/subscribe | Subscribe user to webpush
[**webpushUnsubscribe**](UserApi.md#webpushUnsubscribe) | **POST** /user/{userId}/webpush/unsubscribe/{endpoint} | UNsubscribe user to webpush


# **checkPushSubscription**
> checkPushSubscription($user_id, $body)

Get push fcm subscription for specified user and token



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | userId to find subscriptions
$body = new \Swagger\Client\Model\PushSubscription(); // \Swagger\Client\Model\PushSubscription | PushSubscription object

try {
    $apiInstance->checkPushSubscription($user_id, $body);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->checkPushSubscription: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| userId to find subscriptions |
 **body** | [**\Swagger\Client\Model\PushSubscription**](../Model/PushSubscription.md)| PushSubscription object |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUser**
> \Swagger\Client\Model\User getUser($user_id)

Get user by id



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | Id of the user

try {
    $result = $apiInstance->getUser($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->getUser: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| Id of the user |

### Return type

[**\Swagger\Client\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **logout**
> logout($body)

Logout current user with provided cookie



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\PushSubscription(); // \Swagger\Client\Model\PushSubscription | PushSubscription object

try {
    $apiInstance->logout($body);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->logout: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\PushSubscription**](../Model/PushSubscription.md)| PushSubscription object | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **operatorAutocomplete**
> \Swagger\Client\Model\Operator[] operatorAutocomplete($search)

Search operator from given string



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$search = "search_example"; // string | string to search for operator

try {
    $result = $apiInstance->operatorAutocomplete($search);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->operatorAutocomplete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **string**| string to search for operator |

### Return type

[**\Swagger\Client\Model\Operator[]**](../Model/Operator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **patchUser**
> \Swagger\Client\Model\User patchUser($user_id, $body)

Patch user



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | user id to patch
$body = new \Swagger\Client\Model\User(); // \Swagger\Client\Model\User | User object

try {
    $result = $apiInstance->patchUser($user_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->patchUser: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| user id to patch |
 **body** | [**\Swagger\Client\Model\User**](../Model/User.md)| User object |

### Return type

[**\Swagger\Client\Model\User**](../Model/User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **pushSend**
> pushSend($user_id)

Send a sample message to test mobile AND web push



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | user id

try {
    $apiInstance->pushSend($user_id);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->pushSend: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| user id |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **pushSubscribe**
> pushSubscribe($user_id, $platform, $body)

Subscribe user to mobile push



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | user id
$platform = "platform_example"; // string | platform of the device (available: android & ios)
$body = new \Swagger\Client\Model\PushSubscription(); // \Swagger\Client\Model\PushSubscription | PushSubscription object

try {
    $apiInstance->pushSubscribe($user_id, $platform, $body);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->pushSubscribe: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| user id |
 **platform** | **string**| platform of the device (available: android &amp; ios) |
 **body** | [**\Swagger\Client\Model\PushSubscription**](../Model/PushSubscription.md)| PushSubscription object |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **pushUnsubscribe**
> pushUnsubscribe($user_id, $platform, $body)

UNsubscribe user from mobile push



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | userId to unsubscribe
$platform = "platform_example"; // string | platform of the device (available: android & ios)
$body = new \Swagger\Client\Model\PushSubscription(); // \Swagger\Client\Model\PushSubscription | PushSubscription object

try {
    $apiInstance->pushUnsubscribe($user_id, $platform, $body);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->pushUnsubscribe: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| userId to unsubscribe |
 **platform** | **string**| platform of the device (available: android &amp; ios) |
 **body** | [**\Swagger\Client\Model\PushSubscription**](../Model/PushSubscription.md)| PushSubscription object |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **refreshToken**
> refreshToken()

Refresh expired JWT token

See in response header for the new JWT Token

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $apiInstance->refreshToken();
} catch (Exception $e) {
    echo 'Exception when calling UserApi->refreshToken: ', $e->getMessage(), PHP_EOL;
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

# **resetPassword**
> resetPassword($email)

Reset user password

Send new password through email notification

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$email = new \Swagger\Client\Model\Email(); // \Swagger\Client\Model\Email | User email

try {
    $apiInstance->resetPassword($email);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->resetPassword: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**\Swagger\Client\Model\Email**](../Model/Email.md)| User email |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **webpushSubscribe**
> webpushSubscribe($user_id, $body)

Subscribe user to webpush



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | user id
$body = new \Swagger\Client\Model\WebpushSubscription(); // \Swagger\Client\Model\WebpushSubscription | WebpushSubscription object

try {
    $apiInstance->webpushSubscribe($user_id, $body);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->webpushSubscribe: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| user id |
 **body** | [**\Swagger\Client\Model\WebpushSubscription**](../Model/WebpushSubscription.md)| WebpushSubscription object |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **webpushUnsubscribe**
> webpushUnsubscribe($user_id, $endpoint)

UNsubscribe user to webpush



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UserApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | userId to unsubscribe
$endpoint = "endpoint_example"; // string | endpoint to unsubscribe

try {
    $apiInstance->webpushUnsubscribe($user_id, $endpoint);
} catch (Exception $e) {
    echo 'Exception when calling UserApi->webpushUnsubscribe: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| userId to unsubscribe |
 **endpoint** | **string**| endpoint to unsubscribe |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


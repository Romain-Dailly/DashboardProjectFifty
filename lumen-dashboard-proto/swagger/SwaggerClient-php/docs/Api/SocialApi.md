# Swagger\Client\SocialApi

All URIs are relative to *http://api-inte.fiftytruck.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptFriendRequest**](SocialApi.md#acceptFriendRequest) | **POST** /friend/accept/user/{myUserId}/friend/{invitorUserId} | Accept pending user friendship
[**addFriendRequest**](SocialApi.md#addFriendRequest) | **POST** /friend/request | Add new (mutual) user friendship request
[**chatkitAuthenticate**](SocialApi.md#chatkitAuthenticate) | **POST** /chat/auth/user/{userId} | Token Provider for Pusher Chatkit
[**deleteFriend**](SocialApi.md#deleteFriend) | **DELETE** /friend/user/{userId}/friend/{friendUserId} | Delete existing friendship
[**getFriends**](SocialApi.md#getFriends) | **GET** /friends/user/{userId} | Get User friends
[**refuseFriendRequest**](SocialApi.md#refuseFriendRequest) | **POST** /friend/refuse/user/{myUserId}/friend/{invitorUserId} | Refuse pending user friendship


# **acceptFriendRequest**
> \Swagger\Client\Model\Friend acceptFriendRequest($my_user_id, $invitor_user_id)

Accept pending user friendship



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\SocialApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$my_user_id = 789; // int | User accepting the friend request
$invitor_user_id = 789; // int | Accept invitation coming from this friend

try {
    $result = $apiInstance->acceptFriendRequest($my_user_id, $invitor_user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SocialApi->acceptFriendRequest: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **my_user_id** | **int**| User accepting the friend request |
 **invitor_user_id** | **int**| Accept invitation coming from this friend |

### Return type

[**\Swagger\Client\Model\Friend**](../Model/Friend.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **addFriendRequest**
> \Swagger\Client\Model\Friend addFriendRequest($body)

Add new (mutual) user friendship request



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\SocialApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\UserFriend(); // \Swagger\Client\Model\UserFriend | UserFriend object

try {
    $result = $apiInstance->addFriendRequest($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SocialApi->addFriendRequest: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\UserFriend**](../Model/UserFriend.md)| UserFriend object |

### Return type

[**\Swagger\Client\Model\Friend**](../Model/Friend.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **chatkitAuthenticate**
> object chatkitAuthenticate($user_id)

Token Provider for Pusher Chatkit



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\SocialApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | user id for which generate token

try {
    $result = $apiInstance->chatkitAuthenticate($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SocialApi->chatkitAuthenticate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| user id for which generate token |

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteFriend**
> deleteFriend($user_id, $friend_user_id)

Delete existing friendship



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\SocialApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | User deleting the friend request
$friend_user_id = 789; // int | Delete friend relation with this (previous) friend

try {
    $apiInstance->deleteFriend($user_id, $friend_user_id);
} catch (Exception $e) {
    echo 'Exception when calling SocialApi->deleteFriend: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| User deleting the friend request |
 **friend_user_id** | **int**| Delete friend relation with this (previous) friend |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getFriends**
> \Swagger\Client\Model\Friend[] getFriends($user_id)

Get User friends



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\SocialApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | User id

try {
    $result = $apiInstance->getFriends($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SocialApi->getFriends: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| User id |

### Return type

[**\Swagger\Client\Model\Friend[]**](../Model/Friend.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **refuseFriendRequest**
> \Swagger\Client\Model\Friend refuseFriendRequest($my_user_id, $invitor_user_id)

Refuse pending user friendship



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\SocialApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$my_user_id = 789; // int | User refusing the friend request
$invitor_user_id = 789; // int | Refuse invitation coming from this (not so) friend

try {
    $result = $apiInstance->refuseFriendRequest($my_user_id, $invitor_user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SocialApi->refuseFriendRequest: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **my_user_id** | **int**| User refusing the friend request |
 **invitor_user_id** | **int**| Refuse invitation coming from this (not so) friend |

### Return type

[**\Swagger\Client\Model\Friend**](../Model/Friend.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


# Swagger\Client\CarrierApi

All URIs are relative to *http://api-inte.fiftytruck.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMarketplaceOffer**](CarrierApi.md#addMarketplaceOffer) | **POST** /marketplaceOffer | Create new MarketplaceOffer
[**addOperator**](CarrierApi.md#addOperator) | **POST** /operator | Create new operator
[**addRouteWaypointToSearchRoute**](CarrierApi.md#addRouteWaypointToSearchRoute) | **POST** /shippingOrderSearch/{shippingOrderSearchId} | Add new waypoint on given search route
[**addShipperScore**](CarrierApi.md#addShipperScore) | **POST** /shipperScore | Set score for given shipper company name
[**addShippingOrderSearch**](CarrierApi.md#addShippingOrderSearch) | **POST** /shippingOrderSearch | Add shipping orders search
[**deleteMarketplaceOffer**](CarrierApi.md#deleteMarketplaceOffer) | **DELETE** /marketplaceOffer/{marketplaceOfferId} | Delete given MarketplaceOffer and withdraw from all Marketplaces
[**deleteMarketplaceUser**](CarrierApi.md#deleteMarketplaceUser) | **DELETE** /marketplace/{marketplaceId}/userId/{userId} | Delete marketplaceUser
[**deleteOperator**](CarrierApi.md#deleteOperator) | **DELETE** /operator/{operatorId} | Delete operator
[**deleteShipperScore**](CarrierApi.md#deleteShipperScore) | **DELETE** /shipperScore/{shipperCompanyName} | Delete ShipperScore
[**deleteShippingOrderSearch**](CarrierApi.md#deleteShippingOrderSearch) | **DELETE** /shippingOrderSearch/{shippingOrderSearchId} | Delete shipping orders search
[**deleteShippingOrderSearchs**](CarrierApi.md#deleteShippingOrderSearchs) | **DELETE** /shippingOrderSearches | Delete multiple shipping orders searches
[**getConsultedShippingOrderResults**](CarrierApi.md#getConsultedShippingOrderResults) | **GET** /shippingOrderResults/consulted | Get ShippingOrderResults previously consulted
[**getCountUnreadShippingOrderResult**](CarrierApi.md#getCountUnreadShippingOrderResult) | **GET** /shippingOrderResults/unread/count | Get new offers count for each searches
[**getDeletedMarketplaceOffers**](CarrierApi.md#getDeletedMarketplaceOffers) | **GET** /marketplaceOffers/deleted | Get deleted marketplace offers
[**getEnabledMarketplaces**](CarrierApi.md#getEnabledMarketplaces) | **GET** /marketplaces | Get enabled marketplaces
[**getMarketplaceOfferDetail**](CarrierApi.md#getMarketplaceOfferDetail) | **GET** /marketplaceOffer/{marketplaceOfferId} | Get offer submitted on marketplaces
[**getMarketplaceOffers**](CarrierApi.md#getMarketplaceOffers) | **GET** /marketplaceOffers | Get offers submitted on marketplaces
[**getOperator**](CarrierApi.md#getOperator) | **GET** /operator/{operatorId} | Get operator by id
[**getOperators**](CarrierApi.md#getOperators) | **GET** /operators | Get all operators
[**getSeizedShippingOrder**](CarrierApi.md#getSeizedShippingOrder) | **GET** /seizedShippingOrder/{seizedShippingOrderId} | Get seized ShippingOrder detail
[**getSeizedShippingOrders**](CarrierApi.md#getSeizedShippingOrders) | **GET** /seizedShippingOrders | Get seized ShippingOrders
[**getShipperScores**](CarrierApi.md#getShipperScores) | **GET** /shipperScores | Get all shipper scores
[**getShippingOrderGrouping**](CarrierApi.md#getShippingOrderGrouping) | **GET** /shippingOrderResultGrouping/{shippingOrderResultId}/{shippingOrderResultComplementId} | Get shipping order grouping with 2 results
[**getShippingOrderResult**](CarrierApi.md#getShippingOrderResult) | **GET** /shippingOrderResult/{shippingOrderResultId} | Get shipping order detail
[**getShippingOrderResultRoute**](CarrierApi.md#getShippingOrderResultRoute) | **GET** /shippingOrderResult/{shippingOrderResultId}/route | Get shipping order route
[**getShippingOrderResults**](CarrierApi.md#getShippingOrderResults) | **GET** /shippingOrderResults/{shippingOrderSearchId} | Get ShippingOrderResults from a given ShippingOrderSearch
[**getShippingOrderResultsNotifications**](CarrierApi.md#getShippingOrderResultsNotifications) | **GET** /shippingOrderResults/notifications | Get ShippingOrderResults previously pushed via notifications
[**getShippingOrderSearch**](CarrierApi.md#getShippingOrderSearch) | **GET** /shippingOrderSearch/{shippingOrderSearchId} | Get shipping order search
[**getShippingOrderSearches**](CarrierApi.md#getShippingOrderSearches) | **GET** /shippingOrderSearches | Get shipping orders search and perform search query
[**getUnreadShippingOrderResults**](CarrierApi.md#getUnreadShippingOrderResults) | **GET** /shippingOrderResults/unread | Get all unread ShippingOrderResults
[**getUserMarketplace**](CarrierApi.md#getUserMarketplace) | **GET** /marketplaces/userId/{userId} | Get marketplaces on which user has entered his credentials
[**markAllResultsAsRead**](CarrierApi.md#markAllResultsAsRead) | **POST** /shippingOrderResults/markAllAsRead | All ShippingOrderResult from all ShippingOrderSearch will be marked as read
[**markAllResultsFromShippingOrderSearchAsRead**](CarrierApi.md#markAllResultsFromShippingOrderSearchAsRead) | **POST** /shippingOrderResults/markAllAsRead/shippingOrderSearch/{shippingOrderSearchId} | All ShippingOrderResult from given ShippingOrderSearch will be marked as read
[**operatorLogin**](CarrierApi.md#operatorLogin) | **POST** /operatorLogin | Login operator user
[**patchOperator**](CarrierApi.md#patchOperator) | **PATCH** /operator/{operatorId} | Patch operator
[**performPaginatedSearch**](CarrierApi.md#performPaginatedSearch) | **POST** /performPaginatedSearch/{shippingOrderSearchId} | Perform shippingOrderSearch and return results with scoring (which is performed synchronously)
[**performSearchWithAsynchronousScoring**](CarrierApi.md#performSearchWithAsynchronousScoring) | **POST** /performSearchWithAsynchronousScoring/{shippingOrderSearchId} | Perform shippingOrderSearch and return results. Scoring is asynchronous and will be provided through websocket
[**publishMarketplaceOffer**](CarrierApi.md#publishMarketplaceOffer) | **POST** /marketplaceOffer/{marketplaceOfferId}/publish/{marketplaceIds} | Publish given MarketplaceOffer
[**putMarketplaceOffer**](CarrierApi.md#putMarketplaceOffer) | **PUT** /marketplaceOffer/{marketplaceOfferId} | Update a MarketplaceOffer
[**putShipperScore**](CarrierApi.md#putShipperScore) | **PUT** /shipperScore | Change score for given shipper company name
[**putShippingOrderSearch**](CarrierApi.md#putShippingOrderSearch) | **PUT** /shippingOrderSearch/{shippingOrderSearchId} | Patch shipping orders search
[**refreshMarketplaceOffer**](CarrierApi.md#refreshMarketplaceOffer) | **POST** /marketplaceOffer/{marketplaceOfferId}/refresh | Refresh given MarketplaceOffer on all Marketplaces
[**registerCarrier**](CarrierApi.md#registerCarrier) | **POST** /registerCarrier | Register new Carrier
[**searchComplements**](CarrierApi.md#searchComplements) | **GET** /shippingOrderResult/{shippingOrderResultId}/searchComplements | Search eventual complementary shipping orders
[**seizeShippingOrderResult**](CarrierApi.md#seizeShippingOrderResult) | **POST** /seizeShippingOrderResult/{shippingOrderResultId} | Seize existing shippingOrderResult
[**sendMailContact**](CarrierApi.md#sendMailContact) | **POST** /shippingOrderResult/{shippingOrderResultId}/sendMailContact | Send contact mail to shipper
[**toggleActivateShippingOrderSearch**](CarrierApi.md#toggleActivateShippingOrderSearch) | **PATCH** /shippingOrderSearch/{shippingOrderSearchId}/toggleActivate | Enable/disable ShippingOrderSearch activation
[**triggerShippingOrderResultDialPhoneNumber**](CarrierApi.md#triggerShippingOrderResultDialPhoneNumber) | **POST** /shippingOrderResult/{shippingOrderResultId}/triggerDialPhoneNumber/phoneAttribute/{phoneAttribute} | Trigger a push to dial a phone number on a mobile device
[**updateOrCreateMarketplaceUser**](CarrierApi.md#updateOrCreateMarketplaceUser) | **POST** /marketplaceUser | Add login/password user to connect to a marketplace
[**withdrawMarketplaceOffer**](CarrierApi.md#withdrawMarketplaceOffer) | **DELETE** /marketplaceOffer/{marketplaceOfferId}/withdraw/{marketplaceIds} | Withdraw given MarketplaceOffer from given Marketplaces


# **addMarketplaceOffer**
> \Swagger\Client\Model\MarketplaceOffer addMarketplaceOffer($body)

Create new MarketplaceOffer



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\MarketplaceOffer(); // \Swagger\Client\Model\MarketplaceOffer | MarketplaceOffer object

try {
    $result = $apiInstance->addMarketplaceOffer($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->addMarketplaceOffer: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\MarketplaceOffer**](../Model/MarketplaceOffer.md)| MarketplaceOffer object |

### Return type

[**\Swagger\Client\Model\MarketplaceOffer**](../Model/MarketplaceOffer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **addOperator**
> addOperator($body)

Create new operator



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\OperatorUser(); // \Swagger\Client\Model\OperatorUser | Operator object

try {
    $apiInstance->addOperator($body);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->addOperator: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\OperatorUser**](../Model/OperatorUser.md)| Operator object |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **addRouteWaypointToSearchRoute**
> \Swagger\Client\Model\ShippingOrderSearch addRouteWaypointToSearchRoute($shipping_order_search_id, $body)

Add new waypoint on given search route



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_search_id = 789; // int | Search id to patch
$body = new \Swagger\Client\Model\RouteWaypoint(); // \Swagger\Client\Model\RouteWaypoint | RouteWaypoint

try {
    $result = $apiInstance->addRouteWaypointToSearchRoute($shipping_order_search_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->addRouteWaypointToSearchRoute: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_search_id** | **int**| Search id to patch |
 **body** | [**\Swagger\Client\Model\RouteWaypoint**](../Model/RouteWaypoint.md)| RouteWaypoint |

### Return type

[**\Swagger\Client\Model\ShippingOrderSearch**](../Model/ShippingOrderSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **addShipperScore**
> \Swagger\Client\Model\ShipperScore addShipperScore($body)

Set score for given shipper company name



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ShipperScore(); // \Swagger\Client\Model\ShipperScore | ShipperScore object

try {
    $result = $apiInstance->addShipperScore($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->addShipperScore: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ShipperScore**](../Model/ShipperScore.md)| ShipperScore object |

### Return type

[**\Swagger\Client\Model\ShipperScore**](../Model/ShipperScore.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **addShippingOrderSearch**
> \Swagger\Client\Model\ShippingOrderSearch addShippingOrderSearch($body)

Add shipping orders search



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ShippingOrderSearch(); // \Swagger\Client\Model\ShippingOrderSearch | ShippingOrderSearch

try {
    $result = $apiInstance->addShippingOrderSearch($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->addShippingOrderSearch: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ShippingOrderSearch**](../Model/ShippingOrderSearch.md)| ShippingOrderSearch |

### Return type

[**\Swagger\Client\Model\ShippingOrderSearch**](../Model/ShippingOrderSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteMarketplaceOffer**
> deleteMarketplaceOffer($marketplace_offer_id)

Delete given MarketplaceOffer and withdraw from all Marketplaces



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_offer_id = 56; // int | Id of the MarketplaceOffer to delete

try {
    $apiInstance->deleteMarketplaceOffer($marketplace_offer_id);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->deleteMarketplaceOffer: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_offer_id** | **int**| Id of the MarketplaceOffer to delete |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteMarketplaceUser**
> deleteMarketplaceUser($marketplace_id, $user_id)

Delete marketplaceUser



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_id = 789; // int | MarketplaceUser id to delete
$user_id = 789; // int | User id to delete

try {
    $apiInstance->deleteMarketplaceUser($marketplace_id, $user_id);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->deleteMarketplaceUser: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_id** | **int**| MarketplaceUser id to delete |
 **user_id** | **int**| User id to delete |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteOperator**
> deleteOperator($operator_id)

Delete operator



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$operator_id = 789; // int | Operator id to delete

try {
    $apiInstance->deleteOperator($operator_id);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->deleteOperator: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operator_id** | **int**| Operator id to delete |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteShipperScore**
> deleteShipperScore($shipper_company_name)

Delete ShipperScore



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipper_company_name = "shipper_company_name_example"; // string | Remove score for this (urlencoded) Shipper Company Name

try {
    $apiInstance->deleteShipperScore($shipper_company_name);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->deleteShipperScore: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipper_company_name** | **string**| Remove score for this (urlencoded) Shipper Company Name |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteShippingOrderSearch**
> deleteShippingOrderSearch($shipping_order_search_id)

Delete shipping orders search



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_search_id = 789; // int | Search id to delete

try {
    $apiInstance->deleteShippingOrderSearch($shipping_order_search_id);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->deleteShippingOrderSearch: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_search_id** | **int**| Search id to delete |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteShippingOrderSearchs**
> deleteShippingOrderSearchs($shipping_order_search_ids)

Delete multiple shipping orders searches



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_search_ids = "shipping_order_search_ids_example"; // string | Search id to delete (format: shippingOrderSearchIds=123;456;789)

try {
    $apiInstance->deleteShippingOrderSearchs($shipping_order_search_ids);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->deleteShippingOrderSearchs: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_search_ids** | **string**| Search id to delete (format: shippingOrderSearchIds&#x3D;123;456;789) |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getConsultedShippingOrderResults**
> \Swagger\Client\Model\ShippingOrderResult[] getConsultedShippingOrderResults()

Get ShippingOrderResults previously consulted



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getConsultedShippingOrderResults();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getConsultedShippingOrderResults: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\ShippingOrderResult[]**](../Model/ShippingOrderResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCountUnreadShippingOrderResult**
> \Swagger\Client\Model\ShippingOrderResultsNewOfferCount[] getCountUnreadShippingOrderResult()

Get new offers count for each searches



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getCountUnreadShippingOrderResult();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getCountUnreadShippingOrderResult: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\ShippingOrderResultsNewOfferCount[]**](../Model/ShippingOrderResultsNewOfferCount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeletedMarketplaceOffers**
> \Swagger\Client\Model\MarketplaceOffer[] getDeletedMarketplaceOffers()

Get deleted marketplace offers



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getDeletedMarketplaceOffers();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getDeletedMarketplaceOffers: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\MarketplaceOffer[]**](../Model/MarketplaceOffer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEnabledMarketplaces**
> \Swagger\Client\Model\Marketplace[] getEnabledMarketplaces()

Get enabled marketplaces



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getEnabledMarketplaces();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getEnabledMarketplaces: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\Marketplace[]**](../Model/Marketplace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getMarketplaceOfferDetail**
> \Swagger\Client\Model\MarketplaceOfferDetail getMarketplaceOfferDetail($marketplace_offer_id)

Get offer submitted on marketplaces



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_offer_id = 789; // int | MarketplaceOffer id

try {
    $result = $apiInstance->getMarketplaceOfferDetail($marketplace_offer_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getMarketplaceOfferDetail: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_offer_id** | **int**| MarketplaceOffer id |

### Return type

[**\Swagger\Client\Model\MarketplaceOfferDetail**](../Model/MarketplaceOfferDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getMarketplaceOffers**
> \Swagger\Client\Model\MarketplaceOffer[] getMarketplaceOffers()

Get offers submitted on marketplaces



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getMarketplaceOffers();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getMarketplaceOffers: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\MarketplaceOffer[]**](../Model/MarketplaceOffer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getOperator**
> \Swagger\Client\Model\Operator getOperator($operator_id)

Get operator by id



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$operator_id = 789; // int | Operator id to fetch

try {
    $result = $apiInstance->getOperator($operator_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getOperator: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operator_id** | **int**| Operator id to fetch |

### Return type

[**\Swagger\Client\Model\Operator**](../Model/Operator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getOperators**
> \Swagger\Client\Model\Operator[] getOperators($search, $filter, $sort)

Get all operators



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$search = "search_example"; // string | Enventual search terms (format: search=attribute1=value1;attribute2!=value2;attribute3IN(4,5,6))
$filter = "filter_example"; // string | Enventual filter terms (format: filter=attribute1,attribute2)
$sort = "sort_example"; // string | Enventual sorting term (format: sort=attribute1,asc)

try {
    $result = $apiInstance->getOperators($search, $filter, $sort);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getOperators: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **string**| Enventual search terms (format: search&#x3D;attribute1&#x3D;value1;attribute2!&#x3D;value2;attribute3IN(4,5,6)) | [optional]
 **filter** | **string**| Enventual filter terms (format: filter&#x3D;attribute1,attribute2) | [optional]
 **sort** | **string**| Enventual sorting term (format: sort&#x3D;attribute1,asc) | [optional]

### Return type

[**\Swagger\Client\Model\Operator[]**](../Model/Operator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSeizedShippingOrder**
> \Swagger\Client\Model\SeizedShippingOrder[] getSeizedShippingOrder($seized_shipping_order_id)

Get seized ShippingOrder detail



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$seized_shipping_order_id = 789; // int | SeizedShippingOrder id

try {
    $result = $apiInstance->getSeizedShippingOrder($seized_shipping_order_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getSeizedShippingOrder: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seized_shipping_order_id** | **int**| SeizedShippingOrder id |

### Return type

[**\Swagger\Client\Model\SeizedShippingOrder[]**](../Model/SeizedShippingOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSeizedShippingOrders**
> \Swagger\Client\Model\SeizedShippingOrder[] getSeizedShippingOrders()

Get seized ShippingOrders



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getSeizedShippingOrders();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getSeizedShippingOrders: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\SeizedShippingOrder[]**](../Model/SeizedShippingOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getShipperScores**
> \Swagger\Client\Model\ShipperScore[] getShipperScores()

Get all shipper scores



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getShipperScores();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getShipperScores: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\ShipperScore[]**](../Model/ShipperScore.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getShippingOrderGrouping**
> \Swagger\Client\Model\ShippingOrderGrouping[] getShippingOrderGrouping($shipping_order_result_id, $shipping_order_result_complement_id, $is_without_toll)

Get shipping order grouping with 2 results



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_result_id = 789; // int | ShippingOrderResult id
$shipping_order_result_complement_id = 789; // int | ShippingOrderResult complement id
$is_without_toll = true; // bool | Specify wether get route with (default) or without toll.

try {
    $result = $apiInstance->getShippingOrderGrouping($shipping_order_result_id, $shipping_order_result_complement_id, $is_without_toll);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getShippingOrderGrouping: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_result_id** | **int**| ShippingOrderResult id |
 **shipping_order_result_complement_id** | **int**| ShippingOrderResult complement id |
 **is_without_toll** | **bool**| Specify wether get route with (default) or without toll. | [optional]

### Return type

[**\Swagger\Client\Model\ShippingOrderGrouping[]**](../Model/ShippingOrderGrouping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getShippingOrderResult**
> \Swagger\Client\Model\ShippingOrderResult getShippingOrderResult($shipping_order_result_id)

Get shipping order detail

When possible, fetch also detail from external marketplace

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_result_id = 789; // int | ShippingOrderResult id

try {
    $result = $apiInstance->getShippingOrderResult($shipping_order_result_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getShippingOrderResult: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_result_id** | **int**| ShippingOrderResult id |

### Return type

[**\Swagger\Client\Model\ShippingOrderResult**](../Model/ShippingOrderResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getShippingOrderResultRoute**
> \Swagger\Client\Model\Routes getShippingOrderResultRoute($shipping_order_result_id, $is_without_toll)

Get shipping order route

When Route has not yet been computed, compute it (cacheable and idempotent request)

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_result_id = 789; // int | ShippingOrderResult id
$is_without_toll = true; // bool | Specify wether get route with (default) or without toll.

try {
    $result = $apiInstance->getShippingOrderResultRoute($shipping_order_result_id, $is_without_toll);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getShippingOrderResultRoute: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_result_id** | **int**| ShippingOrderResult id |
 **is_without_toll** | **bool**| Specify wether get route with (default) or without toll. | [optional]

### Return type

[**\Swagger\Client\Model\Routes**](../Model/Routes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getShippingOrderResults**
> \Swagger\Client\Model\ShippingOrderResult[] getShippingOrderResults($shipping_order_search_id)

Get ShippingOrderResults from a given ShippingOrderSearch



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_search_id = 789; // int | ShippingOrderSearch id for which get results

try {
    $result = $apiInstance->getShippingOrderResults($shipping_order_search_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getShippingOrderResults: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_search_id** | **int**| ShippingOrderSearch id for which get results |

### Return type

[**\Swagger\Client\Model\ShippingOrderResult[]**](../Model/ShippingOrderResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getShippingOrderResultsNotifications**
> \Swagger\Client\Model\ShippingOrderResult[] getShippingOrderResultsNotifications($page)

Get ShippingOrderResults previously pushed via notifications



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$page = 789; // int | page

try {
    $result = $apiInstance->getShippingOrderResultsNotifications($page);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getShippingOrderResultsNotifications: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| page |

### Return type

[**\Swagger\Client\Model\ShippingOrderResult[]**](../Model/ShippingOrderResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getShippingOrderSearch**
> \Swagger\Client\Model\ShippingOrderSearch[] getShippingOrderSearch($shipping_order_search_id)

Get shipping order search



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_search_id = 789; // int | ShippingOrderSearch id

try {
    $result = $apiInstance->getShippingOrderSearch($shipping_order_search_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getShippingOrderSearch: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_search_id** | **int**| ShippingOrderSearch id |

### Return type

[**\Swagger\Client\Model\ShippingOrderSearch[]**](../Model/ShippingOrderSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getShippingOrderSearches**
> \Swagger\Client\Model\ShippingOrderSearch[] getShippingOrderSearches()

Get shipping orders search and perform search query



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getShippingOrderSearches();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getShippingOrderSearches: ', $e->getMessage(), PHP_EOL;
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

# **getUnreadShippingOrderResults**
> \Swagger\Client\Model\ShippingOrderResult[] getUnreadShippingOrderResults()

Get all unread ShippingOrderResults



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getUnreadShippingOrderResults();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getUnreadShippingOrderResults: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\ShippingOrderResult[]**](../Model/ShippingOrderResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUserMarketplace**
> \Swagger\Client\Model\MarketplaceUser[] getUserMarketplace($user_id)

Get marketplaces on which user has entered his credentials



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$user_id = 789; // int | User id

try {
    $result = $apiInstance->getUserMarketplace($user_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->getUserMarketplace: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| User id |

### Return type

[**\Swagger\Client\Model\MarketplaceUser[]**](../Model/MarketplaceUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **markAllResultsAsRead**
> markAllResultsAsRead()

All ShippingOrderResult from all ShippingOrderSearch will be marked as read



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $apiInstance->markAllResultsAsRead();
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->markAllResultsAsRead: ', $e->getMessage(), PHP_EOL;
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

# **markAllResultsFromShippingOrderSearchAsRead**
> markAllResultsFromShippingOrderSearchAsRead($shipping_order_search_id)

All ShippingOrderResult from given ShippingOrderSearch will be marked as read



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_search_id = 789; // int | ShippingOrderSearch from which ShippingOrderResults will be marked as read

try {
    $apiInstance->markAllResultsFromShippingOrderSearchAsRead($shipping_order_search_id);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->markAllResultsFromShippingOrderSearchAsRead: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_search_id** | **int**| ShippingOrderSearch from which ShippingOrderResults will be marked as read |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **operatorLogin**
> \Swagger\Client\Model\OperatorUser operatorLogin($login)

Login operator user



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$login = new \Swagger\Client\Model\Login1(); // \Swagger\Client\Model\Login1 | Identifier and password matching a B2P user

try {
    $result = $apiInstance->operatorLogin($login);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->operatorLogin: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | [**\Swagger\Client\Model\Login1**](../Model/Login1.md)| Identifier and password matching a B2P user |

### Return type

[**\Swagger\Client\Model\OperatorUser**](../Model/OperatorUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **patchOperator**
> \Swagger\Client\Model\Operator patchOperator($operator_id, $body)

Patch operator



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$operator_id = 789; // int | Operator id to delete
$body = new \Swagger\Client\Model\Operator(); // \Swagger\Client\Model\Operator | Operatorobject

try {
    $result = $apiInstance->patchOperator($operator_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->patchOperator: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operator_id** | **int**| Operator id to delete |
 **body** | [**\Swagger\Client\Model\Operator**](../Model/Operator.md)| Operatorobject |

### Return type

[**\Swagger\Client\Model\Operator**](../Model/Operator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **performPaginatedSearch**
> \Swagger\Client\Model\ShippingOrderResult[] performPaginatedSearch($shipping_order_search_id, $page)

Perform shippingOrderSearch and return results with scoring (which is performed synchronously)



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_search_id = 789; // int | ShippingOrderSearch id for which perform search
$page = 789; // int | page

try {
    $result = $apiInstance->performPaginatedSearch($shipping_order_search_id, $page);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->performPaginatedSearch: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_search_id** | **int**| ShippingOrderSearch id for which perform search |
 **page** | **int**| page |

### Return type

[**\Swagger\Client\Model\ShippingOrderResult[]**](../Model/ShippingOrderResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **performSearchWithAsynchronousScoring**
> \Swagger\Client\Model\ShippingOrderResult[] performSearchWithAsynchronousScoring($shipping_order_search_id)

Perform shippingOrderSearch and return results. Scoring is asynchronous and will be provided through websocket



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_search_id = 789; // int | ShippingOrderSearch id for which perform search

try {
    $result = $apiInstance->performSearchWithAsynchronousScoring($shipping_order_search_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->performSearchWithAsynchronousScoring: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_search_id** | **int**| ShippingOrderSearch id for which perform search |

### Return type

[**\Swagger\Client\Model\ShippingOrderResult[]**](../Model/ShippingOrderResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **publishMarketplaceOffer**
> \Swagger\Client\Model\MarketplaceOfferPublication[] publishMarketplaceOffer($marketplace_offer_id, $marketplace_ids, $body)

Publish given MarketplaceOffer



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_offer_id = 56; // int | Id of the MarketplaceOffer to publish
$marketplace_ids = "marketplace_ids_example"; // string | Comma-separated list of ids of Marketplaces to publish MarketplaceOffer on.
$body = new \Swagger\Client\Model\MarketplaceMetadata(); // \Swagger\Client\Model\MarketplaceMetadata | Eventual marketplace publication metadata

try {
    $result = $apiInstance->publishMarketplaceOffer($marketplace_offer_id, $marketplace_ids, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->publishMarketplaceOffer: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_offer_id** | **int**| Id of the MarketplaceOffer to publish |
 **marketplace_ids** | **string**| Comma-separated list of ids of Marketplaces to publish MarketplaceOffer on. |
 **body** | [**\Swagger\Client\Model\MarketplaceMetadata**](../Model/MarketplaceMetadata.md)| Eventual marketplace publication metadata | [optional]

### Return type

[**\Swagger\Client\Model\MarketplaceOfferPublication[]**](../Model/MarketplaceOfferPublication.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **putMarketplaceOffer**
> \Swagger\Client\Model\MarketplaceOffer putMarketplaceOffer($marketplace_offer_id, $body)

Update a MarketplaceOffer



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_offer_id = 789; // int | MarketplaceOffer id
$body = new \Swagger\Client\Model\MarketplaceOffer(); // \Swagger\Client\Model\MarketplaceOffer | MarketplaceOffer object

try {
    $result = $apiInstance->putMarketplaceOffer($marketplace_offer_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->putMarketplaceOffer: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_offer_id** | **int**| MarketplaceOffer id |
 **body** | [**\Swagger\Client\Model\MarketplaceOffer**](../Model/MarketplaceOffer.md)| MarketplaceOffer object |

### Return type

[**\Swagger\Client\Model\MarketplaceOffer**](../Model/MarketplaceOffer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **putShipperScore**
> \Swagger\Client\Model\ShipperScore putShipperScore($body)

Change score for given shipper company name



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ShipperScore(); // \Swagger\Client\Model\ShipperScore | ShipperScore object

try {
    $result = $apiInstance->putShipperScore($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->putShipperScore: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ShipperScore**](../Model/ShipperScore.md)| ShipperScore object |

### Return type

[**\Swagger\Client\Model\ShipperScore**](../Model/ShipperScore.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **putShippingOrderSearch**
> \Swagger\Client\Model\ShippingOrderSearch putShippingOrderSearch($shipping_order_search_id, $body)

Patch shipping orders search



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_search_id = 789; // int | Search id to patch
$body = new \Swagger\Client\Model\ShippingOrderSearch(); // \Swagger\Client\Model\ShippingOrderSearch | ShippingOrderSearch

try {
    $result = $apiInstance->putShippingOrderSearch($shipping_order_search_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->putShippingOrderSearch: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_search_id** | **int**| Search id to patch |
 **body** | [**\Swagger\Client\Model\ShippingOrderSearch**](../Model/ShippingOrderSearch.md)| ShippingOrderSearch |

### Return type

[**\Swagger\Client\Model\ShippingOrderSearch**](../Model/ShippingOrderSearch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **refreshMarketplaceOffer**
> refreshMarketplaceOffer($marketplace_offer_id)

Refresh given MarketplaceOffer on all Marketplaces



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_offer_id = 56; // int | Id of the MarketplaceOffer to refresh

try {
    $apiInstance->refreshMarketplaceOffer($marketplace_offer_id);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->refreshMarketplaceOffer: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_offer_id** | **int**| Id of the MarketplaceOffer to refresh |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **registerCarrier**
> \Swagger\Client\Model\RegisterCarrier registerCarrier($body)

Register new Carrier



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\RegisterCarrier(); // \Swagger\Client\Model\RegisterCarrier | RegisterCarrier object

try {
    $result = $apiInstance->registerCarrier($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->registerCarrier: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\RegisterCarrier**](../Model/RegisterCarrier.md)| RegisterCarrier object |

### Return type

[**\Swagger\Client\Model\RegisterCarrier**](../Model/RegisterCarrier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **searchComplements**
> \Swagger\Client\Model\ShippingOrderResult[] searchComplements($shipping_order_result_id)

Search eventual complementary shipping orders



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_result_id = 789; // int | ShippingOrderResult id to search complements for

try {
    $result = $apiInstance->searchComplements($shipping_order_result_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->searchComplements: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_result_id** | **int**| ShippingOrderResult id to search complements for |

### Return type

[**\Swagger\Client\Model\ShippingOrderResult[]**](../Model/ShippingOrderResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **seizeShippingOrderResult**
> \Swagger\Client\Model\SeizedShippingOrder seizeShippingOrderResult($shipping_order_result_id, $body)

Seize existing shippingOrderResult



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_result_id = 789; // int | ShippingOrderResult id
$body = new \Swagger\Client\Model\Body(); // \Swagger\Client\Model\Body | Negociated price

try {
    $result = $apiInstance->seizeShippingOrderResult($shipping_order_result_id, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->seizeShippingOrderResult: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_result_id** | **int**| ShippingOrderResult id |
 **body** | [**\Swagger\Client\Model\Body**](../Model/Body.md)| Negociated price |

### Return type

[**\Swagger\Client\Model\SeizedShippingOrder**](../Model/SeizedShippingOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **sendMailContact**
> sendMailContact($shipping_order_result_id, $body)

Send contact mail to shipper



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_result_id = 789; // int | ShippingOrderResult from which to send mail
$body = new \Swagger\Client\Model\MailContact(); // \Swagger\Client\Model\MailContact | MailContact

try {
    $apiInstance->sendMailContact($shipping_order_result_id, $body);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->sendMailContact: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_result_id** | **int**| ShippingOrderResult from which to send mail |
 **body** | [**\Swagger\Client\Model\MailContact**](../Model/MailContact.md)| MailContact |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **toggleActivateShippingOrderSearch**
> toggleActivateShippingOrderSearch($shipping_order_search_id, $body)

Enable/disable ShippingOrderSearch activation



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_search_id = 789; // int | Search id to patch
$body = new \Swagger\Client\Model\ShippingOrderSearch(); // \Swagger\Client\Model\ShippingOrderSearch | ShippingOrderSearch

try {
    $apiInstance->toggleActivateShippingOrderSearch($shipping_order_search_id, $body);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->toggleActivateShippingOrderSearch: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_search_id** | **int**| Search id to patch |
 **body** | [**\Swagger\Client\Model\ShippingOrderSearch**](../Model/ShippingOrderSearch.md)| ShippingOrderSearch |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **triggerShippingOrderResultDialPhoneNumber**
> triggerShippingOrderResultDialPhoneNumber($shipping_order_result_id, $phone_attribute)

Trigger a push to dial a phone number on a mobile device



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$shipping_order_result_id = 789; // int | ShippingOrderResult id for which trigger a dial
$phone_attribute = "phone_attribute_example"; // string | Property in model where to take phone number to dial

try {
    $apiInstance->triggerShippingOrderResultDialPhoneNumber($shipping_order_result_id, $phone_attribute);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->triggerShippingOrderResultDialPhoneNumber: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_order_result_id** | **int**| ShippingOrderResult id for which trigger a dial |
 **phone_attribute** | **string**| Property in model where to take phone number to dial |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateOrCreateMarketplaceUser**
> updateOrCreateMarketplaceUser($body)

Add login/password user to connect to a marketplace



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\MarketplaceUser(); // \Swagger\Client\Model\MarketplaceUser | MarketplaceUser object

try {
    $apiInstance->updateOrCreateMarketplaceUser($body);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->updateOrCreateMarketplaceUser: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\MarketplaceUser**](../Model/MarketplaceUser.md)| MarketplaceUser object |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **withdrawMarketplaceOffer**
> \Swagger\Client\Model\MarketplaceOfferPublication[] withdrawMarketplaceOffer($marketplace_offer_id, $marketplace_ids)

Withdraw given MarketplaceOffer from given Marketplaces



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CarrierApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$marketplace_offer_id = 56; // int | Id of the MarketplaceOffer to withdraw
$marketplace_ids = "marketplace_ids_example"; // string | Comma-separated list of ids of Marketplaces to withdraw MarketplaceOffer off.

try {
    $result = $apiInstance->withdrawMarketplaceOffer($marketplace_offer_id, $marketplace_ids);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CarrierApi->withdrawMarketplaceOffer: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_offer_id** | **int**| Id of the MarketplaceOffer to withdraw |
 **marketplace_ids** | **string**| Comma-separated list of ids of Marketplaces to withdraw MarketplaceOffer off. |

### Return type

[**\Swagger\Client\Model\MarketplaceOfferPublication[]**](../Model/MarketplaceOfferPublication.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


# Swagger\Client\GeoApi

All URIs are relative to *http://api-inte.fiftytruck.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**computeRoute**](GeoApi.md#computeRoute) | **POST** /geo/route/compute | Compute given route
[**findGeoCityByCity**](GeoApi.md#findGeoCityByCity) | **GET** /geo/geoCity/findByCity/{city}/postcodePrefix/{postcodePrefix} | Returns eventually found GeoCity
[**findGeoCityByPostcode**](GeoApi.md#findGeoCityByPostcode) | **GET** /geo/geoCity/findByPostcode/{postcode} | Returns eventually found GeoCity
[**geocodePostalAddress**](GeoApi.md#geocodePostalAddress) | **POST** /geo/geocodePostalAddress | Geocode given PostalAddress
[**getFuelPrices**](GeoApi.md#getFuelPrices) | **GET** /geo/fuelPrices | Get fuel prices with gas stations
[**getGooglePlaces**](GeoApi.md#getGooglePlaces) | **GET** /geo/google/places | Proxy to Google Places API


# **computeRoute**
> \Swagger\Client\Model\Route computeRoute($body)

Compute given route



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GeoApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = array(new \Swagger\Client\Model\RouteWaypoint()); // \Swagger\Client\Model\RouteWaypoint[] | Array of RouteWaypoints

try {
    $result = $apiInstance->computeRoute($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GeoApi->computeRoute: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\RouteWaypoint[]**](../Model/RouteWaypoint.md)| Array of RouteWaypoints |

### Return type

[**\Swagger\Client\Model\Route**](../Model/Route.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **findGeoCityByCity**
> \Swagger\Client\Model\GeoCity findGeoCityByCity($city, $postcode_prefix)

Returns eventually found GeoCity

Full text search against city database

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GeoApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$city = "city_example"; // string | City name of the city to find
$postcode_prefix = "postcode_prefix_example"; // string | Eventual prefix of a postcode to restrict search with

try {
    $result = $apiInstance->findGeoCityByCity($city, $postcode_prefix);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GeoApi->findGeoCityByCity: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **string**| City name of the city to find |
 **postcode_prefix** | **string**| Eventual prefix of a postcode to restrict search with |

### Return type

[**\Swagger\Client\Model\GeoCity**](../Model/GeoCity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **findGeoCityByPostcode**
> \Swagger\Client\Model\GeoCity findGeoCityByPostcode($postcode)

Returns eventually found GeoCity



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GeoApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$postcode = "postcode_example"; // string | Postcode of the city to find

try {
    $result = $apiInstance->findGeoCityByPostcode($postcode);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GeoApi->findGeoCityByPostcode: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postcode** | **string**| Postcode of the city to find |

### Return type

[**\Swagger\Client\Model\GeoCity**](../Model/GeoCity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **geocodePostalAddress**
> \Swagger\Client\Model\GeocodedAddress geocodePostalAddress($body)

Geocode given PostalAddress



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GeoApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\PostalAddress(); // \Swagger\Client\Model\PostalAddress | PostalAddress object

try {
    $result = $apiInstance->geocodePostalAddress($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GeoApi->geocodePostalAddress: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\PostalAddress**](../Model/PostalAddress.md)| PostalAddress object |

### Return type

[**\Swagger\Client\Model\GeocodedAddress**](../Model/GeocodedAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getFuelPrices**
> \Swagger\Client\Model\GeoGasStation[] getFuelPrices()

Get fuel prices with gas stations



### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GeoApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->getFuelPrices();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GeoApi->getFuelPrices: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\GeoGasStation[]**](../Model/GeoGasStation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getGooglePlaces**
> getGooglePlaces($input, $offset, $location, $radius, $language, $types, $components, $strictbounds)

Proxy to Google Places API

For more details, please see Google documentation: https://developers.google.com/places/web-service/autocomplete

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\GeoApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$input = "input_example"; // string | The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance.
$offset = "offset_example"; // string | The position, in the input term, of the last character that the service uses to match predictions.
$location = "location_example"; // string | The point around which you wish to retrieve place information. Must be specified as latitude,longitude.
$radius = "radius_example"; // string | The distance (in meters) within which to return place results.
$language = "language_example"; // string | The language code, indicating in which language the results should be returned, if possible.
$types = "types_example"; // string | The types of place results to return. If no type is specified, all types will be returned.
$components = "components_example"; // string | A grouping of places to which you would like to restrict your results.
$strictbounds = "strictbounds_example"; // string | Returns only those places that are strictly within the region defined by location and radius.

try {
    $apiInstance->getGooglePlaces($input, $offset, $location, $radius, $language, $types, $components, $strictbounds);
} catch (Exception $e) {
    echo 'Exception when calling GeoApi->getGooglePlaces: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | **string**| The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance. |
 **offset** | **string**| The position, in the input term, of the last character that the service uses to match predictions. | [optional]
 **location** | **string**| The point around which you wish to retrieve place information. Must be specified as latitude,longitude. | [optional]
 **radius** | **string**| The distance (in meters) within which to return place results. | [optional]
 **language** | **string**| The language code, indicating in which language the results should be returned, if possible. | [optional]
 **types** | **string**| The types of place results to return. If no type is specified, all types will be returned. | [optional]
 **components** | **string**| A grouping of places to which you would like to restrict your results. | [optional]
 **strictbounds** | **string**| Returns only those places that are strictly within the region defined by location and radius. | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


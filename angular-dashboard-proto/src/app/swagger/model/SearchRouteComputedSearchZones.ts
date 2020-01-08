/**
 * Fifty Truck API
 * This is the API of fifty truck
 *
 * OpenAPI spec version: 0.1.0
 * Contact: contact@fiftytruck.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GeoJsonPolygon } from './GeoJsonPolygon';
import { SearchRouteComputedSearchZonesLoadingPointAddressZones } from './SearchRouteComputedSearchZonesLoadingPointAddressZones';
import { SearchRouteComputedSearchZonesUnloadingPointAddressZones } from './SearchRouteComputedSearchZonesUnloadingPointAddressZones';


export interface SearchRouteComputedSearchZones { 
    loadingPointAddressZones?: Array<SearchRouteComputedSearchZonesLoadingPointAddressZones>;
    loadingPointGeoMask?: GeoJsonPolygon;
    unloadingPointAddressZones?: Array<SearchRouteComputedSearchZonesUnloadingPointAddressZones>;
    unloadingPointGeoMask?: GeoJsonPolygon;
    routeGeoMask?: GeoJsonPolygon;
}

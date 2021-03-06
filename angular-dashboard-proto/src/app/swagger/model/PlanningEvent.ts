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
import { GeoJsonPoint } from './GeoJsonPoint';
import { SearchMetadataResource } from './SearchMetadataResource';


export interface PlanningEvent { 
    planningId?: number;
    dateFrom?: Date;
    dateTo?: Date;
    affrete?: string;
    driver?: string;
    truck?: string;
    trailer?: string;
    resource?: SearchMetadataResource;
    loadingInLinearMeter?: number;
    weightInTon?: number;
    client?: string;
    fromPostcode?: string;
    fromCity?: string;
    fromCountry?: string;
    fromGpsCoordinates?: GeoJsonPoint;
    toPostcode?: string;
    toCity?: string;
    toCountry?: string;
    toGpsCoordinates?: GeoJsonPoint;
    emptySpace?: number;
    isEmptySpaceKnown?: boolean;
    duration?: number;
    startAt?: number;
}

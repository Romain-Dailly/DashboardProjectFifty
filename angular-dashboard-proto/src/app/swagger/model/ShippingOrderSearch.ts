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
import { SearchCosts } from './SearchCosts';
import { SearchMetadata } from './SearchMetadata';
import { SearchRoute } from './SearchRoute';
import { ShippingOrderSearchGlobalSearchTerms } from './ShippingOrderSearchGlobalSearchTerms';


export interface ShippingOrderSearch { 
    id?: number;
    operatorId?: number;
    carrierId?: number;
    name?: string;
    type?: ShippingOrderSearch.TypeEnum;
    isActive?: boolean;
    isRunning?: boolean;
    pushActivated?: boolean;
    pushScoreThreshold?: number;
    searchRoutes?: Array<SearchRoute>;
    globalSearchTerms?: ShippingOrderSearchGlobalSearchTerms;
    costs?: SearchCosts;
    metadata?: SearchMetadata;
}
export namespace ShippingOrderSearch {
    export type TypeEnum = 'path' | 'tms' | 'truck';
    export const TypeEnum = {
        Path: 'path' as TypeEnum,
        Tms: 'tms' as TypeEnum,
        Truck: 'truck' as TypeEnum
    };
}

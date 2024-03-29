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


export interface ShippingOrderSearchGlobalSearchTermsPickingDate { 
    pickingDateType?: ShippingOrderSearchGlobalSearchTermsPickingDate.PickingDateTypeEnum;
    pickingDateStart?: Date;
    pickingDateEnd?: Date;
}
export namespace ShippingOrderSearchGlobalSearchTermsPickingDate {
    export type PickingDateTypeEnum = 'exactDay' | 'between' | 'today' | 'tomorrow' | 'todayAndTomorrow' | 'todayAndTomorrowAndTheDayAfter' | 'tomorrowAndTheDayAfter' | 'theDayAfter';
    export const PickingDateTypeEnum = {
        ExactDay: 'exactDay' as PickingDateTypeEnum,
        Between: 'between' as PickingDateTypeEnum,
        Today: 'today' as PickingDateTypeEnum,
        Tomorrow: 'tomorrow' as PickingDateTypeEnum,
        TodayAndTomorrow: 'todayAndTomorrow' as PickingDateTypeEnum,
        TodayAndTomorrowAndTheDayAfter: 'todayAndTomorrowAndTheDayAfter' as PickingDateTypeEnum,
        TomorrowAndTheDayAfter: 'tomorrowAndTheDayAfter' as PickingDateTypeEnum,
        TheDayAfter: 'theDayAfter' as PickingDateTypeEnum
    };
}

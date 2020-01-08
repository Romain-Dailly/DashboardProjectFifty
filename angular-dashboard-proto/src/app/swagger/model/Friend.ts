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


export interface Friend { 
    userId?: number;
    firstName?: string;
    lastName?: string;
    companyName?: string;
    status?: Friend.StatusEnum;
}
export namespace Friend {
    export type StatusEnum = 'accepted' | 'refused' | 'pending';
    export const StatusEnum = {
        Accepted: 'accepted' as StatusEnum,
        Refused: 'refused' as StatusEnum,
        Pending: 'pending' as StatusEnum
    };
}

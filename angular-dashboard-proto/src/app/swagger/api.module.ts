import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ApiAdminService } from './api/admin.service';
import { ApiCarrierService } from './api/carrier.service';
import { ApiFmsService } from './api/fms.service';
import { ApiGeoService } from './api/geo.service';
import { ApiSocialService } from './api/social.service';
import { ApiSystemService } from './api/system.service';
import { ApiTmsService } from './api/tms.service';
import { ApiUserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ApiAdminService,
    ApiCarrierService,
    ApiFmsService,
    ApiGeoService,
    ApiSocialService,
    ApiSystemService,
    ApiTmsService,
    ApiUserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}

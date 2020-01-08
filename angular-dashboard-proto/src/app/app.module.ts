import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Translation
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

// Charts
import { ChartsModule } from 'ng2-charts';

// Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { ResizableModule } from 'angular-resizable-element';

// Swagger
import { ApiModule, Configuration } from './swagger';

// Cookies
import { CookieService } from 'ngx-cookie-service';

// Components
import { ActivitySelectorComponent } from './components/sidenav/filters/activity-selector/activity-selector.component';
import { AgenciesSelectorComponent } from './components/sidenav/filters/agencies-selector/agencies-selector.component';
import { AppComponent } from './app.component';
import { CustomersSelectorComponent } from './components/sidenav/filters/customers-selector/customers-selector.component';
import { DateSelectorComponent } from './components/sidenav/filters/date-selector/date-selector.component';
import { LineBarChartComponent } from './components/charts/line-bar-chart/line-bar-chart.component';
import { DistancesSelectorComponent } from './components/sidenav/filters/distances-selector/distances-selector.component';
import { DriversSelectorComponent } from './components/sidenav/filters/drivers-selector/drivers-selector.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';
import { HomeComponent } from './components/home/home.component';
import { MonthSelectorComponent } from './components/sidenav/filters/date-selector/month-selector/month-selector.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TrucksSelectorComponent } from './components/sidenav/filters/trucks-selector/trucks-selector.component';
import { YearSelectorComponent } from './components/sidenav/filters/date-selector/year-selector/year-selector.component';
import { ModalContent, DialogBoxComponent } from './components/sidenav/dialog-box/dialog-box.component';
import { PresetsSelectorComponent } from './components/topnav/presets-selector/presets-selector.component';
import { LoginComponent } from './components/login/login.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function swaggerConfig() {
  return new Configuration({withCredentials: true});
}

@NgModule({
  declarations: [
    ActivitySelectorComponent,
    AgenciesSelectorComponent,
    AppComponent,
    CustomersSelectorComponent,
    DateSelectorComponent,
    LineBarChartComponent,
    DistancesSelectorComponent,
    DoughnutChartComponent,
    DriversSelectorComponent,
    HomeComponent,
    MonthSelectorComponent,
    PieChartComponent,
    SidenavComponent,
    TrucksSelectorComponent,
    YearSelectorComponent,
    DialogBoxComponent,
    ModalContent,
    PresetsSelectorComponent,
    LoginComponent,
    TopnavComponent,
    OrdersListComponent,
    
  ],
  imports: [
    ApiModule.forRoot(swaggerConfig),
    BrowserAnimationsModule, 
    BrowserModule,
    ChartsModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    ResizableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [ModalContent, DialogBoxComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

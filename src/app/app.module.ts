import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.routes';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TileComponent } from './tile/tile.component';
import { WeatherReportComponent } from './dashboard/weather-report/weather-report.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TileComponent,
    WeatherReportComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

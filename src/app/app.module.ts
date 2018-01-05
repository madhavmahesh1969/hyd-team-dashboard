import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.routes';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TileComponent } from './tile/tile.component';
import { WeatherReportComponent } from './dashboard/weather-report/weather-report.component';
import { FusionchartComponent } from './fusionchart/fusionchart.component';


// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';
 
// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
 
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TileComponent,
    WeatherReportComponent,
    FusionchartComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule,
	routes,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

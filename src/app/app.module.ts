import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './routes/app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TileComponent } from './components/tile/tile.component';
import { WeatherReportComponent } from './components/dashboard/weather-report/weather-report.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { ProjectGrowthComponent } from './components/project-growth/project-growth.component';
import { FusionchartComponent } from './components/fusionchart/fusionchart.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

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
    EmployeeDashboardComponent,
    ProjectGrowthComponent,
    FusionchartComponent,
    EmployeeDashboardComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FusionChartsModule,
	routes,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

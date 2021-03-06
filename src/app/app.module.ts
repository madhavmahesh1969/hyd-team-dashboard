import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './routes/app.routes';

import { ChartsModule } from 'ng2-charts';
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
import { PaidUserComponent } from './components/paid-user/paid-user.component';
import { MainComponent } from './components/main/main.component';
 
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
    PaidUserComponent,
    MainComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FusionChartsModule,
    ChartsModule,
    routes,
    ReactiveFormsModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

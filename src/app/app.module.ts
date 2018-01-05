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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TileComponent,
    WeatherReportComponent,
    EmployeeDashboardComponent,
    ProjectGrowthComponent
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

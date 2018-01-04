import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherReportComponent } from './dashboard/weather-report/weather-report.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';


const appRoutes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
         {path: '', redirectTo: 'weatherreport', pathMatch: 'full'}, 
         {path: 'weatherreport', component: WeatherReportComponent},
         {path: 'employee', component: EmployeeDashboardComponent},
       ]
  }
];

export const routes: ModuleWithProviders =RouterModule.forRoot(appRoutes);
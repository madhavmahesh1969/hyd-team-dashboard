import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherReportComponent } from './dashboard/weather-report/weather-report.component'
import { FusionchartComponent } from './fusionchart/fusionchart.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
	children: [
      {path: '', redirectTo: 'weatherreport', pathMatch: 'full'}, 
      {path: 'weatherreport', component: WeatherReportComponent},      
    ]
  },
  {
    path: 'fusionchart',
    component: FusionchartComponent 
  }
];

export const routes: ModuleWithProviders =RouterModule.forRoot(appRoutes);
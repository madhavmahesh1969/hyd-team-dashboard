import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { WeatherReportComponent } from '../components/dashboard/weather-report/weather-report.component';
import { EmployeeDashboardComponent } from '../components/employee-dashboard/employee-dashboard.component';
import { ProjectGrowthComponent } from '../components/project-growth/project-growth.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent,
  children: [
        {path: '', redirectTo: 'employee', pathMatch: 'full'}, 
        {path: 'weatherreport', component: WeatherReportComponent},
        {path: 'employee', component: EmployeeDashboardComponent},
        {path: 'projectGrowth', component: ProjectGrowthComponent}
      ]
  }
];

export const routes: ModuleWithProviders =RouterModule.forRoot(appRoutes);
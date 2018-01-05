import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { WeatherReportComponent } from '../components/dashboard/weather-report/weather-report.component';
import { EmployeeDashboardComponent } from '../components/employee-dashboard/employee-dashboard.component';
import { ProjectGrowthComponent } from '../components/project-growth/project-growth.component';
import { FusionchartComponent } from '../components/fusionchart/fusionchart.component';
import { PaidUserComponent } from '../components/paid-user/paid-user.component';
import { MainComponent } from '../components/main/main.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent,
    children: [
          {path: '', redirectTo: 'employee', pathMatch: 'full'}, 
          {path: 'weatherreport', component: WeatherReportComponent},
          {path: 'employee', component: EmployeeDashboardComponent},
          {path: 'projectGrowth', component: ProjectGrowthComponent},
          {path: 'fusionchart', component: FusionchartComponent}
        ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'paidUser', component: PaidUserComponent}
];

export const routes: ModuleWithProviders =RouterModule.forRoot(appRoutes);
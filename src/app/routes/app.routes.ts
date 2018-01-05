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
import { TemplateDrivenFormComponent } from '../components/template-driven-form/template-driven-form.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent,
    children: [
      {path: '', redirectTo: 'paidUser', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'paidUser', component: PaidUserComponent},
      {path: 'freeUser', component: TemplateDrivenFormComponent}
    ]
  },
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'employee', pathMatch: 'full'}, 
      {path: 'weatherreport', component: WeatherReportComponent},
      {path: 'employee', component: EmployeeDashboardComponent},
      {path: 'projectGrowth', component: ProjectGrowthComponent},
      {path: 'fusionchart', component: FusionchartComponent}
    ]
  },
  { path: '**', redirectTo: '' }
  // {path: 'login', component: LoginComponent},
  // {path: 'paidUser', component: PaidUserComponent},
  // {path: 'freeUser', component: TemplateDrivenFormComponent}
];

export const routes: ModuleWithProviders =RouterModule.forRoot(appRoutes);
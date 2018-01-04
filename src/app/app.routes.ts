import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const routes: ModuleWithProviders =RouterModule.forRoot(appRoutes);
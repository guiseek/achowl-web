import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderLayoutComponent } from './provider-layout/provider-layout.component';

const routes: Routes = [{
  path: '',
  component: ProviderLayoutComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }, {
    path: 'dashboard',
    loadChildren: './provider-dashboard/provider-dashboard.module#ProviderDashboardModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }

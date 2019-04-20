import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderDashboardPageComponent } from './provider-dashboard-page/provider-dashboard-page.component';

const routes: Routes = [{
  path: '',
  component: ProviderDashboardPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderDashboardRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceDashboardPageComponent } from './place-dashboard-page/place-dashboard-page.component';

const routes: Routes = [{
  path: '',
  component: PlaceDashboardPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceDashboardRoutingModule { }

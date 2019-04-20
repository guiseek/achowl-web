import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceLayoutComponent } from './place-layout/place-layout.component';

const routes: Routes = [{
  path: '',
  component: PlaceLayoutComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },{
    path: 'dashboard',
    loadChildren: './place-dashboard/place-dashboard.module#PlaceDashboardModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule { }

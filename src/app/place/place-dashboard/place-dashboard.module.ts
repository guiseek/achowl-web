import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceDashboardRoutingModule } from './place-dashboard-routing.module';
import { PlaceDashboardPageComponent } from './place-dashboard-page/place-dashboard-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CustomMaterialModule } from '../../material.module';

@NgModule({
  declarations: [PlaceDashboardPageComponent],
  imports: [
    CommonModule,
    PlaceDashboardRoutingModule,
    CustomMaterialModule,
    LayoutModule
  ]
})
export class PlaceDashboardModule { }

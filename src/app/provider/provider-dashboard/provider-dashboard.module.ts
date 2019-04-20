import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderDashboardRoutingModule } from './provider-dashboard-routing.module';
import { ProviderDashboardPageComponent } from './provider-dashboard-page/provider-dashboard-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CustomMaterialModule } from '../../material.module';

@NgModule({
  declarations: [ProviderDashboardPageComponent],
  imports: [
    CommonModule,
    ProviderDashboardRoutingModule,
    CustomMaterialModule,
    LayoutModule
  ]
})
export class ProviderDashboardModule { }

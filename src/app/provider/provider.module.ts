import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderLayoutComponent } from './provider-layout/provider-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProviderHeaderComponent } from './provider-layout/provider-header/provider-header.component';
import { ProviderNavigationComponent } from './provider-layout/provider-navigation/provider-navigation.component';
import { CustomMaterialModule } from '../material.module';

@NgModule({
  declarations: [ProviderLayoutComponent, ProviderHeaderComponent, ProviderNavigationComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    LayoutModule,
    CustomMaterialModule
  ]
})
export class ProviderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceLayoutComponent } from './place-layout/place-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PlaceHeaderComponent } from './place-layout/place-header/place-header.component';
import { PlaceNavigationComponent } from './place-layout/place-navigation/place-navigation.component';
import { CustomMaterialModule } from '../material.module';

@NgModule({
  declarations: [PlaceLayoutComponent, PlaceHeaderComponent, PlaceNavigationComponent],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    LayoutModule,
    CustomMaterialModule
  ]
})
export class PlaceModule { }

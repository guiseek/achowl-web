import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PublicHeaderComponent } from './public-layout/public-header/public-header.component';
import { PublicNavigationComponent } from './public-layout/public-navigation/public-navigation.component';
import { PublicFooterComponent } from './public-layout/public-footer/public-footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { CustomMaterialModule } from '../material.module';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [PublicLayoutComponent, PublicHeaderComponent, PublicNavigationComponent, PublicFooterComponent, HomePageComponent, FeaturesPageComponent, PricingPageComponent, SignupPageComponent],
  imports: [
    CommonModule,
    CoreModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    CustomMaterialModule
  ]
})
export class PublicModule { }

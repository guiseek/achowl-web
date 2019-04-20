import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserProfileComponent } from './card-user-profile/card-user-profile.component';
import { CustomMaterialModule } from '../material.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [CardUserProfileComponent],
  imports: [
    CommonModule,
    CoreModule,
    CustomMaterialModule
  ],
  exports: [CardUserProfileComponent]
})
export class ComponentsModule { }

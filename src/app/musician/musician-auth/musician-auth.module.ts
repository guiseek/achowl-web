import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicianAuthRoutingModule } from './musician-auth-routing.module';
import { MusicianAuthLayoutComponent } from './musician-auth-layout/musician-auth-layout.component';
import { MusicianSignInPageComponent } from './musician-sign-in-page/musician-sign-in-page.component';
import { MusicianSignUpPageComponent } from './musician-sign-up-page/musician-sign-up-page.component';
import { CustomMaterialModule } from '../../material.module';
import { CoreModule } from '../../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MusicianAuthLayoutComponent, MusicianSignInPageComponent, MusicianSignUpPageComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    CoreModule,
    ReactiveFormsModule,
    MusicianAuthRoutingModule
  ]
})
export class MusicianAuthModule { }

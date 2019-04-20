import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackService } from './services/snack.service';
import {
  MatSnackBarModule
} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    SnackService
  ]
})
export class SharedModule { }

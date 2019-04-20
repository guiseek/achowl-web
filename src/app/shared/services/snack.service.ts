import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class SnackService {
  config: MatSnackBarConfig = {
    duration: 5000,
    panelClass: null
  }
  panelClass: string
  action: string
  constructor(
    private snack: MatSnackBar
  ) { }
  open(message: string, cfg?) {
    let { action, ...config } = cfg
    this.snack.open(
      message,
      action ? action : 'OK',
      config ? config : this.config
    )
  }
}

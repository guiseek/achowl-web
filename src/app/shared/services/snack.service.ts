import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class SnackService {
  config: MatSnackBarConfig = {
    duration: 5000,
    panelClass: null
  }
  action: string = 'OK'
  panelClass: string
  constructor(
    private snack: MatSnackBar
  ) { }
  open(message: string, cfg:any = {}) {
    let { action, ...config } = cfg
    this.snack.open(
      message,
      action ? action : this.action,
      Object.assign(this.config, config)
    )
  }
}

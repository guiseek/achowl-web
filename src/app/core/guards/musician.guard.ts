import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { take, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MusicianGuard implements CanActivate {
  constructor(
    private user: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.user.user$.pipe(
      take(1),
      map(user => user && user.types.musician ? true : false),
      tap(isMusician => {
        console.log(isMusician)
        if (!isMusician) {
          this.snackBar.open('Você não tem permissão.', 'Fechar', {
            duration: 5000
          })
          // this.router.navigateByUrl('/musico/login')
        }
      })
    )
  }
}

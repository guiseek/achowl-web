import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Band } from '../interfaces';
import { BandService } from './band.service';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicianBandResolverService implements Resolve<Band> {

  constructor(
    private bs: BandService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Band> | Observable<never> {
    let id = route.paramMap.get('id')
    
    if (!id) {
      console.log('currentBandqwe: ', this.bs.currentBand)
      // console.log('fragment: ', state.root)
      // if (this.bs.currentBand)
    }
    return this.bs.getBandById(id).pipe(
      take(1),
      mergeMap(band => {
        if (band) {
          return of(band)
        } else {
          this.router.navigate(['/musico/band'])
          return EMPTY
        }
      })
    )
  }
}

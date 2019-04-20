import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { MusicianService } from '../services/musician.service';

@Pipe({
  name: 'musicianProfile'
})
export class MusicianProfilePipe implements PipeTransform {
  constructor(private service: MusicianService) { }
  transform(id: string) {    
    return id ? this.service.getMusicianById(id) : of(null);
  }
}
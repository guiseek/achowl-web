import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';

@Pipe({
  name: 'userProfile'
})
export class UserProfilePipe implements PipeTransform {
  constructor(private service: UserService) { }
  transform(userId: string) {    
    return userId ? this.service.getUserById(userId) : of(null);
  }
}
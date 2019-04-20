import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../core/interfaces/user';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'owl-card-user-profile',
  templateUrl: './card-user-profile.component.html',
  styleUrls: ['./card-user-profile.component.scss']
})
export class CardUserProfileComponent implements OnInit {
  @Input() uid: string
  user$: Observable<User>
  constructor(
    private service: UserService
  ) {
  }

  ngOnInit() {
    if (this.uid) {
      this.user$ = this.service.getUserById(this.uid)
    }
  }

}

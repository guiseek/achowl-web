import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarService } from './services/calendar.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { UserProfilePipe } from './pipes/user-profile.pipe';
import { MusicianService } from './services/musician.service';
import { BandService } from './services/band.service';
import { MatSnackBarModule } from '@angular/material';
import { MusicianProfilePipe } from './pipes';

@NgModule({
  declarations: [UserProfilePipe, TimeAgoPipe, MusicianProfilePipe],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [AuthService, UserService, MusicianService, BandService, CalendarService, AuthGuard],
  exports: [
    UserProfilePipe, TimeAgoPipe, MusicianProfilePipe
  ]
})
export class CoreModule { }

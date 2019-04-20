import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { CalendarEvent } from 'calendar-utils';
import { Calendar, CalendarState } from '../interfaces/calendar';
import { Observable } from 'rxjs';
import { map, take, delay } from 'rxjs/operators';
import { Event } from '../interfaces/event';
// import { colors } from '../../shared/config/colors/event-color';
import { AFSQuery } from '../firebase/afs-query';

@Injectable()
export class CalendarService extends FirestoreService {
  private path: string = 'calendar'

  constructor(
    private auth: AuthService,
    public afs: AngularFirestore
  ) {
    super(afs)
  }
  initEvent(): Observable<Calendar> {
    return this.prepare<Calendar>(this.path).pipe(take(1))
  }
  save(event: Calendar) {
    return this.set<Calendar>(this.path, event.id, event)
  }
  get(where?) {
    const query = new AFSQuery()
    if (where) {
      query.where = where
    }
    return this.afs.collection<Calendar>(this.path, ref => query.exec(ref)).get()
  }
  findOutstanding() {
    const start = new Date()
    const query = new AFSQuery()
    query.where = [
      ['start','>=',start],
      ['meta.state','==',CalendarState.PENDING]
    ]
    query.orderBy = ['start','asc']
    return this.collection<Calendar>(this.path, query)
  }
  findCancellations() {
    const start = new Date()
    const query = new AFSQuery()
    query.where = [
      ['start','>=',start],
      ['meta.state','==',CalendarState.CANCELING]
    ]
    query.orderBy = ['start','asc']
    return this.collection<Calendar>(this.path, query)
  }
  getWeekSchedule() {
    const start = new Date()
    const end = new Date()
    start.setHours(0)
    start.setMinutes(0)
    end.setDate(start.getDate() + 7)
    end.setHours(23)
    end.setMinutes(59)

    const query = new AFSQuery()
    query.where = [
      ['start','>=',start],
      ['start','<=',end],
      ['meta.state','==',CalendarState.CONFIRMED]
    ]
    query.orderBy = ['start','asc']
    return this.collection<Calendar>(this.path, query)
  }
  // getColor(state: CalendarState) {
  //   switch (state) {
  //     case CalendarState.PENDING: return colors.yellow
  //     case CalendarState.CONFIRMED: return colors.green
  //     case CalendarState.CANCELING: return colors.grey
  //     case CalendarState.CANCELED: return colors.red
  //   }
  // }
  findEvents(): Observable<CalendarEvent[]> {
    return this.collection<Event>(this.path).pipe(
      map((events) => {
        return events.map(({start, end, color, meta, ...event}) => {
          // let clr = this.getColor(meta.state)
          return {
            start: start.toDate(),
            end: end.toDate(),
            // color: clr,
            meta,
            ...event
          }
        })
      })
    )
  }
  confirm(event: Calendar) {
    event.meta.state = CalendarState.CONFIRMED
    return this.save(event)
  }
  cancel(event: Calendar) {
    event.meta.state = CalendarState.CANCELED
    return this.save(event)
  }
  remove(id: string) {
    return this.delete(this.path, id)
  }
}

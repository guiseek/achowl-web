import { EventColor, EventAction } from "calendar-utils";
export enum CalendarState {
  PENDING,
  CONFIRMED,
  CANCELING,
  CANCELED
}
export interface CalendarMeta {
  state: CalendarState;
  client?: string;
  description?: string;
  paid?: boolean
}
export interface Calendar {
  id?: string;
  start: Date;
  end?: Date;
  title: string;
  color?: EventColor;
  actions?: EventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;
  meta?: CalendarMeta;
}

import { EventColor, EventAction } from "calendar-utils";
import { firestore } from "firebase/app";
import { CalendarMeta } from "./calendar";

export interface Event {
  id?: string | number;
  start: firestore.Timestamp;
  end?: firestore.Timestamp;
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
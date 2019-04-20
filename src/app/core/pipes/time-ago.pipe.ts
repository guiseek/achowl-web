import { Pipe, PipeTransform } from '@angular/core';
import { isYesterday, differenceInDays, format, distanceInWordsToNow } from 'date-fns';
import * as pt from 'date-fns/locale/pt';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: any): string {
    // return value
    if (isYesterday(value)) {
      return 'yesterday';
    }
    return differenceInDays(Date.now(), value) > 1 ? 
      format(value, 'MMM D, YYYY, H:mm:ss A') : distanceInWordsToNow(value, {addSuffix: true, locale: pt });
  }
}

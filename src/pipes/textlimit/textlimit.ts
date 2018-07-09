import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TextlimitPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'textlimit',
})
export class TextlimitPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, limit?: any): any {
    let actualLimit = (limit)? limit : 10;
    if (value.length >= actualLimit)
      return value.substr(0, actualLimit) + '...';
    return value;
  }
}

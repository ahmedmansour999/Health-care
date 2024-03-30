import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueArray',

})
export class UniqueArrayPipe implements PipeTransform {
  transform(value: any[], ...args: any[]): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    // Using Set to filter out duplicates
    const uniqueValues = [...new Set(value)];

    return uniqueValues;
  }
}

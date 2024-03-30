import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDoctor',
  standalone: true
})
export class SearchDoctorPipe implements PipeTransform {

  transform(text: string, limit: any): string {
    return text.split(' ').slice(0 , limit).join(' ');
  }

}

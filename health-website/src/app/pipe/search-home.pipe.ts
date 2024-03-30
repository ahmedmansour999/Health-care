import { Pipe, PipeTransform } from '@angular/core';
import { ListDoctor } from '../interface/list-doctor';

@Pipe({
  name: 'searchHome',
  standalone: true
})
export class SearchHomePipe implements PipeTransform {

  transform(doctors :ListDoctor[] , term:string ): ListDoctor[] {
    return doctors.filter((doctor) => doctor.name.toLowerCase().includes(term.toLowerCase()) );
  }

}

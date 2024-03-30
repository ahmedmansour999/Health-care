import { subscribe } from 'diagnostics_channel';
import { Component } from '@angular/core';
import { FreetimeService } from '../../service/freetime.service';
import { pipe } from 'rxjs';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../service/local-storage.service';


interface TimeSlot {
  time: string;
  available: boolean;
}

interface CalendarDay {
  date: Date;
  availableTimes: TimeSlot[];
}

@Component({
  selector: 'app-free-time',
  standalone: true,
  imports: [DatePipe , FormsModule],
  templateUrl: './free-time.component.html',
  styleUrl: './free-time.component.css',
})
export class FreetimeComponent {

  selectedDay: string = '';
  freetimes: any = { };
  selectedFreetime: string = '';
  day: string = '';
  selectedFreetimeto: string = '';
  doctorId: any=this.authToken.getData('user').id;
  editedFreetimeId: number | null = null;
  editedFreetime: string = '';



  constructor(private freetimeapi: FreetimeService , private authToken:LocalStorageService    ) {
  }

  ngOnInit() {
    this.fetchFreetimes();
  }

  fetchFreetimes() {
    this.freetimeapi.getAllFreetimes(this.doctorId).subscribe(
      (data) => {
        this.freetimes = data;

      },
      (error) => {
        console.error('Error fetching freetimes:', error);
      }
    );
  }



  saveNewFreetime() {
    console.log('Selected Day:', this.selectedDay);
    console.log('Selected Freetime:', this.selectedFreetime);
    console.log('Selected Freetimeto:', this.selectedFreetimeto);

    if (this.selectedFreetime && this.selectedDay) {

      let usingDays : any ;
      // Check if the selected day already exists among the existing freetimes
      this.freetimeapi.getAllFreetimes(this.doctorId).subscribe(data => {
        usingDays = data
        if (Array.isArray(usingDays.freetimes)) {
          const existingFreetimes = usingDays.freetimes;
          const isDayAlreadySelected = existingFreetimes.some((freetime : any ) => freetime.days === this.selectedDay);
          if (isDayAlreadySelected) {
            console.log(existingFreetimes);
            console.log(isDayAlreadySelected);

            alert('Choose Another Day');
          } else {
            // Proceed with saving the new freetime if the day is not already selected
            const formattedFreetime = this.combineDateAndTime(new Date(), this.selectedFreetime);
      const formattedFreetimeto = this.combineDateAndTime(new Date(), this.selectedFreetimeto);
            const newFreetime = {
              user_id: this.doctorId,
              doctor_freetimes: formattedFreetime,
              doctor_freetimesto: formattedFreetimeto,
              days: this.selectedDay
            };

            this.freetimeapi.createFreetime(newFreetime).subscribe(
              () => {
                console.log('New freetime saved successfully');
                // Reset selected values
                this.selectedFreetime = '';
                this.selectedDay = '';
                this.selectedFreetimeto = '';
                this.fetchFreetimes()
              },
              (error) => {
                console.error('Error saving new freetime:', error);
              }
            );
          }
        } else {
          console.error('Existing freetimes is not an array:');
        }
      });
    } else {
      console.log('Please select a day and time.');
    }
  }


  combineDateAndTime(date: Date, time: string): string {
    const formattedDate = date.toISOString().split('T')[0];
    return `${formattedDate} ${time}`;
  }




  deleteFreetime(id: number) {
    this.freetimeapi.deleteFreetime(id).subscribe(
      () => {
        console.log('Freetime deleted successfully');
        this.fetchFreetimes(); // Refresh the list of freetimes
      },
      (error) => {
        console.error('Error deleting freetime:', error);
      }
    );
  }

  // openEditModal(freetime: any) {
  //   this.selectedFreetime = freetime.doctor_freetimes;
  //   this.editedFreetimeId = freetime.id;
  //   $('#editModal').modal('show'); // Show the modal
  // }

    editFreetime(id: number, doctor_freetimes: string) {
    this.editedFreetimeId = id;
    this.editedFreetime = doctor_freetimes;
  }
}

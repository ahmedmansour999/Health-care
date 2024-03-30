import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.css',
})
export class DoctorCardComponent {


  doctorData: any[] = [
    {
      image_url:
        'https://doctor.myupchar.com/6322/test632220180910-17135-1iq6vb9.jpg',
      id: 6322,
      name: 'Dr. Atish Ranjan',
      live_status: true,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/patna/kankarbagh/ent/dr-atish-ranjan-6322',
      experience: 12,
      degree: 'MBBS,DM',
      speciality: 'Emergency Medicine',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url:
        'https://doctor.myupchar.com/18437/test1843720181129-1175-15cybye.jpg',
      id: 18437,
      name: 'Dr. Vikrant Mittal',
      live_status: true,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/rupnagar/chandigarh-sector-59-s-o/ent/dr-vikrant-mittal-18437',
      experience: 9,
      degree: 'MBBS,MS',
      speciality: 'Infectious Disease',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/112895/20191110_124655.jpg',
      id: 112895,
      name: 'Dr. Anil Gupta',
      live_status: false,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/lucknow/aliganj/ent/dr-anil-gupta-112895',
      experience: 7,
      degree: 'MBBS,MS',
      speciality: 'ENT, Audiology &amp; Speech Pathology',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: false,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: true,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: false,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: true,
      live_status_text: 'Not Available ',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: true,
      live_status_text: 'Not Available ',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: true,
      live_status_text: 'Not Available ',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: false,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: false,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: false,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: false,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
    {
      image_url: 'https://doctor.myupchar.com/113329/IMG-20201204-WA0001.jpg',
      id: 113329,
      name: 'Dr. Navin Shukla',
      live_status: false,
      live_status_text: 'Available',
      permalink:
        'https://www.myupchar.com/doctors/gwalior/moti-mahal-s-o/ent/dr-navin-shukla-113329',
      experience: 14,
      degree: 'MS',
      speciality: 'Oral &amp; Maxillofacial Surgery',
      gender: 'male',
      specialist_doctor: true,
    },
  ];

  ngOnInit(): void {
    
  }


}

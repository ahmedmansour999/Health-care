import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  private sessionUrl = 'http://localhost:8000/api/session';

  constructor(private http: HttpClient) { }

  createSession(patientDetails: any, paymentMethod: string): Observable<any> {
    // Construct the request body with patient details and payment method
    const requestData = {
      patientDetails: patientDetails,
      paymentMethod: paymentMethod
    };

    return this.http.post<any>(this.sessionUrl, requestData);
  }
}

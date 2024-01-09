import { Injectable, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MserviceService implements OnInit {
  URL = 'http://localhost:3000/register';
  isAuthenticated: any = false;

  // `${this.apiUrl}?email=${email}`;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // this.isLoggedIn();
  }

  handleRegister(data: any): Observable<any> {
    return this.http.post(this.URL, data);
  }

  getBymail(email: any) {
    return this.http.get(`${this.URL}?email=${email}`);
  }

 

  isLoggedIn() {
    sessionStorage.setItem('bool', 'true');
    console.log(sessionStorage.getItem('bool'));
    return sessionStorage.getItem('bool');
  }
}

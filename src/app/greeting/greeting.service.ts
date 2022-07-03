import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Greeting } from './greeting';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  private baseUrl = 'http://localhost:8080/greeting';

  constructor(
    private http: HttpClient
  ) { }

  getGreeting(): Observable<Greeting> {
    return this.http.get<Greeting>(`${this.baseUrl}`);
  }

  getGreetingForUser(name: string): Observable<Greeting> {
    return this.http.get<Greeting>(`${this.baseUrl}?name=${name}`);
  }
}

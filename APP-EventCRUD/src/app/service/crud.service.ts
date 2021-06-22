import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Event } from './Event';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  REST_API: string = 'http://localhost:8080/api';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  addEvent(data): Observable<any> {
    let API_URL = `${this.REST_API}/add-event`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  getEventsLength() {
    return this.httpClient.get(`${this.REST_API}/events`);
  }

  getEvents(offset: Number, limit: Number) {
    console.log(`${this.REST_API}/events/${offset}/${limit}`);
    return this.httpClient.get(`${this.REST_API}/events/${offset}/${limit}`);
  }

  getEvent(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-event/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  updateEvent(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-event/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  deleteEvent(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-event/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

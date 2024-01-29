import { Injectable } from '@angular/core';
import axios, {Axios,} from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private apiUrl = 'http://8080'; // Replace with your actual Node.js server URL

  constructor() {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };

    return new Observable((observer) => {
      axios.post('http://8080/userauth/signin', body)
        .then((response: { data: any; }) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: any) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  Signup(username: string, password: string): Observable<any> {
    const body = { username, password };

    return new Observable((observer) => {
      axios.post('http://8080/userauth/signup', body)
        .then((response: { data: any; }) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: any) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  Logout(): Observable<any> {
    

    return new Observable((observer) => {
      axios.post('http://8080/userauth/signout')
        .then((response: { data: any; }) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: any) => {
          observer.error(error);
          observer.complete();
        });
    });
  }
}

function then(arg0: (response: { data: any; }) => void) {
  throw new Error('Function not implemented.');
}

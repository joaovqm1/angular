import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl = 'localhost:1338';

  constructor(private http: HttpClient) {

  }

  logIn(username, password): Observable<any> {
    const params = {
      username: username,
      password: password
    }

    return this.get('user/login', params);
  }

  get(endpoint, params = {}): Observable<any> {
    const httpParams = new HttpParams();
    for (let key in params) {
      httpParams.set(key, params[key]);
    }

    const url = `${this.baseUrl}/${endpoint}`;

    return this.http.get(url, {
      params: httpParams
    });
  }
}

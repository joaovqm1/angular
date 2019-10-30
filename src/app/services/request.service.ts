import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseUrl = environment.serverUrl;

  constructor(private http: HttpClient) {

  }

  logIn(username, password): Observable<any> {
    const params = {
      username,
      password
    };

    return this.get('user/login', params);
  }

  get(endpoint, params = {}): Observable<any> {
    const httpParams = new HttpParams();
    for (const key of Object.keys(params)) {
      httpParams.set(key, params[key]);
    }

    const url = `${this.baseUrl}/${endpoint}`;

    return this.http.get(url, {
      params
    });
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

import {AuthenticationService} from './authentication.service';
import {User} from '../classes/user'
import{ AppConstants} from '../classes/app-constants';

@Injectable()
export class OrderService {

 //variable initialization
 _baseURL : string;

 //Immutable set of Http headers, with lazy parsing.
 private _headers = new HttpHeaders().set('Content-Type', 'application/json');

 //constructor initialization
  constructor(private _htc:HttpClient, private authService: AuthenticationService) {
    this._baseURL = AppConstants.baseURL;
  }

   //Get Users Detail.
   getUsers(): Observable<User[]> {
    const headers = this._headers.append('Authorization:', 'Bearer ' + this.authService._token);

    //Get users from REST API
    return this._htc.get<User[]>(this._baseURL, { headers : headers });
  }

  getOrders(){
        const headers = this._headers.append('Authorization:', 'Bearer ' + this.authService._token);

  	return this._htc.get(this._baseURL +'/order/waitingOrders',  { headers : headers })
        .map((response: Response) => {
            console.log(response)
        });
  }
}
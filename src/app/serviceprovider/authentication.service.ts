import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import{ AppConstants} from '../classes/app-constants';

@Injectable()
export class AuthenticationService {
 //variable initialization
 _token : any;
 _baseURL : string;

 //constructor initialization
  constructor(private _htc:HttpClient) {
     //set token if saved in local storage
     var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     this._token = currentUser && currentUser.token;
     this._baseURL = AppConstants.baseURL;
   }

login(email: string, password: string, fcmToken: string): Observable<boolean> {
    return this._htc.post(this._baseURL +'/auth/login', { email: email, password: password, fcmToken:fcmToken })
        .map((response: Response) => {
            // login successfully, if there is a jwt token in the response
            let token = response['token'];
            console.log(token)
            if (token) {
                //set the token property for validate token in the app.
                this._token = token;

                //store username and jwt token in local storage to keep user logged in between page refreshes.
                localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

                //returns true to indicate successful login
                return true;
            }
            else {
                // returns false to indicate failed login
                return false;
            }
        });
}

logout(): void {
    // clear token remove user from local storage to log user out.
    this._token = null;
    localStorage.removeItem('currentUser');
  }
}

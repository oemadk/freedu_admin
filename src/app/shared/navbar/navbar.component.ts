import { Component } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{

    rows:any[] = [];
    selected: any[] = [];
  	closeResult: string;
    modalReference: any;
    token;
    temp = [];

	constructor(private http:HttpClient,public toastr: ToastsManager) {
  
        // this.token =  JSON.parse( localStorage.getItem('currentUser'));
        //   this.token = this.token.token;
       

 //    var config = {
 //      headers: {
 //          'Content-Type': 'application/json',
 //          'authorization': "Bearer" + " " + this.token
 //      }}
 //     this.http.get('http://3.86.186.71:8080/api/order/waitingOrders', config)
 //     .subscribe(res=>{
 //        this.rows = res['order'];

 //       console.log('res')
 //     });
 //    }

	// printX:number;
 //  ngOnInit() {
 //    const myInterval = Observable.interval(30000);
 //    myInterval.subscribe((x : number)=>{
 //      this.printX=x;
 //      console.log('its working now bitch')
 //       var config = {
 //      headers: {
 //          'Content-Type': 'application/json',
 //          'authorization': "Bearer" + " " + this.token
 //      }}
 //        this.http.get('http://3.86.186.71:8080/api/order/waitingOrders', config)
 //     .subscribe(res=>{
 //       console.log(res)
 //    });


 //    })
  }

 
}

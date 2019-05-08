import { Component,ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";

import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

declare var require: any;
const data: any = require('../shared/data/items.json');

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent {
    rows = [];
    selected: any[] = [];
  	closeResult: string;
	modalReference: any;
    temp = [];

     token;
     addServiceForm;
     public errorMsg = '';
    // Table Column Titles

    // Table Column Titles
             columns = [
        { name: 'name' },
        { prop: 'category' },
        { prop: 'washing_price' },
        { prop: 'fullService_price' },
        { prop: 'ironing_price' },

    ];
    @ViewChild(DatatableComponent) table: DatatableComponent;
constructor(private modalService: NgbModal, private router: Router,


  private http:HttpClient,public toastr: ToastsManager, private _fbuilder: FormBuilder,
        private route: ActivatedRoute) {
  this.addServiceForm = _fbuilder.group({

        name: [''],
        category: [''],
        washing_price: [''],
        ironing_price:[''],
        fullService_price:['']

      });
  
        this.temp = [...data];
        this.rows;

          this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;
       

    var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this.http.get('http://3.86.186.71:8080/api/product/', config)
     .subscribe(res=>{
 this.temp = [this.rows];
        this.rows = res['carpets'];
       console.log(res, 'products')
     });


    }

    carpets(){
        this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;
       

    var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this.http.get('http://3.86.186.71:8080/api/product/', config)
     .subscribe(res=>{
 this.temp = [this.rows];
        this.rows = res['carpets'];
       console.log(res, 'products')
     });
              this.columns = [
        { name: 'name' },
        { prop: 'washing_price' },
        { prop: 'category' },

    ];

    }


    home(){
        this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;
       

    var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this.http.get('http://3.86.186.71:8080/api/product/', config)
     .subscribe(res=>{
 this.temp = [this.rows];
        this.rows = res['home'];
       console.log(res, 'products')
     });
              this.columns = [
        { name: 'name' },
        { prop: 'category' },
        { prop: 'washing_price' },
        { prop: 'fullService_price' },
        { prop: 'ironing_price' },

    ];

    }
    



    clothes(){
        this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;
       

    var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this.http.get('http://3.86.186.71:8080/api/product/', config)
     .subscribe(res=>{
 this.temp = [this.rows];
        this.rows = res['clothes'];
       console.log(res, 'products')
     });
              this.columns = [
        { name: 'name' },
        { prop: 'category' },
        { prop: 'washing_price' },
        { prop: 'fullService_price' },
        { prop: 'ironing_price' },

    ];

    }
    
    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.service.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

 onSelect(event, modal) {
        console.log(event);
        this.modalService.open(modal).result.then((result) => {
   console.log(event)
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
onActivate($event){
}
open(content){
  console.log(event)

this.modalService.open(content).result.then((result) => {
   console.log(event)
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

close(a , b){
  var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = JSON.stringify({status: b});
         console.log(b);
        this.http.patch('http://3.86.186.71:8080/api/services/' + a ,body, config)
     .subscribe(res=>{
       
       console.log(res, 'result from post')
     });
}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

    addNew(modal2){
                this.modalService.open(modal2).result.then((result) => {
     console.log(event)
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  addService(user){
    if (this.addServiceForm) {
        console.log(this.addServiceForm.value)
      // if(this.loginForm.username !== undefined && this.loginForm.username !== null &&
      //   this.loginForm.password !== undefined && this.loginForm.password !== null){
      //     //Call Login service for validate username and password.
         var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = this.addServiceForm.value
         console.log(body)

        this.http.post('http://3.86.186.71:8080/api/product/',body, config)
     .subscribe(res=>{
       
       console.log(res, 'result from post')
     });

     close()

      
    }
    else{
      this.errorMsg = 'Adding Service failed, Please try again!';
    }
  }
  
}

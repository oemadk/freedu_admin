import { Component,ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


declare var require: any;
const data: any = require('../shared/data/users.json');

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
    rows = [];
    token;
    selected: any[] = [];
  	closeResult: string;
modalReference: any;

    temp = [];

    // Table Column Titles
    columns = [
        { name: 'id' },
        { prop: 'name' },
        { name: 'email' },
        { name: 'speciality' },
        { name: 'college' },
        { name: 'created_at'},
        { name: 'Is Verified',
          prop: 'isverified'
        },
    ];
    @ViewChild(DatatableComponent) table: DatatableComponent;
constructor
(

private modalService: NgbModal,
private http:HttpClient,
public toastr: ToastsManager, 
private _fbuilder: FormBuilder,

) {
        this.temp = [...data];
        this.rows;

        this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;
       

    var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this.http.get('http://127.0.0.1:8000/api/v1/all/users', config)
     .subscribe(res=>{
 this.temp = [this.rows];
        this.rows = res['data'];
       console.log('res')
     });
    }

    verify(id){
        var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = JSON.stringify({user_id: id});
         console.log(body);
        this.http.post('http://127.0.0.1:8000/api/v1/user/verify',body, config)
     .subscribe(res=>{
       
       console.log(res, 'result from post')
     });


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

close(){
	this.modalReference.close();
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

}

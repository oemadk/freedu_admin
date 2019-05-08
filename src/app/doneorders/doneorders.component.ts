import { Component,ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Router, ActivatedRoute } from "@angular/router";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';

import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";

declare var require: any;
const data: any = require('../shared/data/inprogress.json');

@Component({
  selector: 'app-doneorders',
  templateUrl: './doneorders.component.html',
  styleUrls: ['./doneorders.component.scss']
})

export class DoneordersComponent {
    rows = [];
    selected: any[] = [];
  	closeResult: string;
modalReference: any;
    token;

    temp = [];

    // Table Column Titles
    columns = [
        { prop: 'user.username',
          name: 'User Name' },
        { prop: 'orderType',
        name:'Order Type' },
        { prop:'payment.method',
          name: 'Payment Type' },
        { prop: 'shipping.phone',
          name:'Shipping Phone' },
        { name: 'comment' },
        { name: 'status' },


    ];
    @ViewChild(DatatableComponent) table: DatatableComponent;
constructor(private modalService: NgbModal, private router: Router,
        private route: ActivatedRoute,private http:HttpClient) {
        this.temp = [...data];
        this.rows = data;
    this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;
       
    var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this.http.get('http://3.86.186.71:8080/api/order/done', config)
     .subscribe(res=>{
        this.temp = [this.rows];
        this.rows = res['orders'];

       console.log(this.rows)
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

close(a , b){
  var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = JSON.stringify({orderNumber: a, status: b});

        this.http.post('http://3.86.186.71:8080/api/order/update',body, config)
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


}

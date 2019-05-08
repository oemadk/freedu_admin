import { Component, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';
import { Router, ActivatedRoute } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";

declare var require: any;
const data: any = require('../shared/data/inprogress.json');
@Component({
  selector: 'app-operatorironing',
  templateUrl: './operatorironing.component.html',
  styleUrls: ['./operatorironing.component.scss']
})
export class OperatorironingComponent{
 rows = [];
    selected: any[] = [];
  	closeResult: string;
modalReference: any;
    token;
    temp = [];

  // Table Column Titles
    columns = [
        { prop: 'username',
          name: 'User Name' },
        { prop: 'email',
        name:'Email Address' },
        { prop:'role',
          name: 'Role' },
        { prop: 'phoneNumber',
          name:'Phone Number' },


    ];
    @ViewChild(DatatableComponent) table: DatatableComponent;
constructor(private modalService: NgbModal,private http:HttpClient) {
        this.temp = [...data];
        this.rows 


                this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;
       
    var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this.http.get('http://3.86.186.71:8080/api/operators/washing-ironing', config)
     .subscribe(res=>{
        this.temp = [this.rows];
        this.rows = res['users'];

       console.log(this.rows)
     });
    }

  //   printX:number;
  // ngOnInit() {
  //   const myInterval = Observable.interval(30000);
  //   myInterval.subscribe((x : number)=>{
  //     this.printX=x;
  //     console.log('its working now bitch')
  //      var config = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'authorization': "Bearer" + " " + this.token
  //     }}
  //       this.http.get('http://3.86.186.71:8080/api/order/waitingOrders', config)
  //    .subscribe(res=>{
  //       this.rows = res['order'];
       
  //      console.log(res)
  //    });
  //   });


  //   }

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

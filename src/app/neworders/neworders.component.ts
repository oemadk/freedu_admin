import { Component,ViewChild, OnInit } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../serviceprovider/order.service';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';
import { Router, ActivatedRoute } from "@angular/router";

declare var require: any;
// const data: any = require('../shared/data/neworders.json');

@Component({
  selector: 'app-neworders',
  templateUrl: './neworders.component.html',
  styleUrls: ['./neworders.component.scss']
})

export class NewordersComponent implements OnInit {
    rows:any[] = [];
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
constructor(private router: Router,
        private route: ActivatedRoute, private _htc:HttpClient,private modalService: NgbModal,private http:HttpClient, private orderService:OrderService) {
  
        this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;
       
        // this.rows = data;

          // this.orderService.getOrders().subscribe(result => {
          //       console.log(result, 'checking out the results')
          // });     

    //   const headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'Authorization': this.token
    // })

    var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this.http.get('http://3.86.186.71:8080/api/order/waitingOrders', config)
     .subscribe(res=>{
        this.temp = [this.rows];
        this.rows = res['order'].reverse();

       console.log('res')
     });
    }

// ngOnInit(){
//       var config = {
//       headers: {
//           'Content-Type': 'application/json',
//           'authorization': "Bearer" + " " + this.token
//       }}
//   Observable.interval(300)
//           .timeInterval()._do
//           this.http.get('http://3.86.186.71:8080/api/order/waitingOrders', config)
//      .subscribe(res=>{
//        console.log('res')
//      });
//           this.http.get().interval(120000)



// }
printX:number;
  ngOnInit() {
    const myInterval = Observable.interval(30000);
    myInterval.subscribe((x : number)=>{
      this.printX=x;
      console.log('its working now bitch')
       var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
        this.http.get('http://3.86.186.71:8080/api/order/waitingOrders', config)
     .subscribe(res=>{
        this.rows = res['order'].reverse();
       
       console.log(res)
     });
    });


    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.orderType.toLowerCase().indexOf(val) !== -1 || !val;
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

  // public go(a){

  //   this.router.navigate(['orderpage/']);

  // }




}

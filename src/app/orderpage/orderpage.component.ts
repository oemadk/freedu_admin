import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';
import * as alertFunctions from '../shared/data/sweet-alerts';

import swal from 'sweetalert2';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss']
})
export class OrderpageComponent implements OnInit {

  token;
  orderDetails;
  id;
  public selectedOption;
    selected: any[] = [];
    selectedProduct: any[] = [];
    closeResult: string;
    orderID;
    products;
    modalReference: any;
    addProductsForm;
  constructor(private router: Router,
            private route: ActivatedRoute, 
              private _htc:HttpClient,
              private modalService: NgbModal,
              private _fbuilder: FormBuilder
              ) { 


  
            this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;
       
      this.route.snapshot.paramMap.get('id')

      this.id = this.route.snapshot.paramMap.get('id')


             this.addProductsForm = _fbuilder.group({

     
        productId: [''],
        name:[''],
        quantity: [''],
        service: ['']
    })


       var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this._htc.get('http://3.86.186.71:8080/api/order/?ref=' + this.id, config)
     .subscribe(res=>{
        this.orderDetails = res;

       console.log(this.orderDetails)
     });
    

       var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this._htc.get('http://3.86.186.71:8080/api/product', config)
     .subscribe(res=>{
        this.products = res;

       console.log(this.orderDetails)
     });

  }

  takeproduct(product, addProductsForm){
    console.log(this.addProductsForm)
    let  a = {
           productId: product._id,
           service: addProductsForm.value.service,
           quantity:addProductsForm.value.quantity,
           name:product.name
    }
      this.selectedProduct.push(a)
      console.log(this.selectedProduct)
  }

  delete(index){
    this.selectedProduct.splice(index, 1)
    console.log(index);
  }
  changeOrder(a,b){


  var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = JSON.stringify({orderNumber: a, status: b});

        this._htc.post('http://3.86.186.71:8080/api/order/update',body, config)
        
     .subscribe(res=>{
       
       console.log(res, 'result from post')
     });

            this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;
       
      this.route.snapshot.paramMap.get('id')

      this.id = this.route.snapshot.paramMap.get('id')
       var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this._htc.get('http://3.86.186.71:8080/api/order/?ref=' + this.id, config)
     .subscribe(res=>{
        this.orderDetails = res;

       console.log(this.orderDetails)
     });
      alertFunctions.typeSuccess(this.orderDetails.status);
    }  

print(){
  window.print()
}
//  async ajaxRequest() {const {value: fruit} = await this.Swal.fire({
//   title: 'Select field validation',
//   input: 'select',
//   inputOptions: {
//     'apples': 'Apples',
//     'bananas': 'Bananas',
//     'grapes': 'Grapes',
//     'oranges': 'Oranges'
//   },
//   inputPlaceholder: 'Select a fruit',
//   showCancelButton: true,
//   inputValidator: (value) => {
//     return new Promise((resolve) => {
//       if (value === 'oranges') {
//         resolve()
//       } else {
//         resolve('You need to select oranges :)')
//       }
//     })
//   }
// })

// if (fruit) {
//   this.Swal.fire('You selected: ' + fruit)
// }
// }

  ngOnInit() {
  }


  //add products

  addProducts(){

var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = {
             orderId:this.orderDetails._id,
             products:
                         this.selectedProduct
             
         }
         // console.log(this.addProductsForm.values)

        this._htc.post('http://3.86.186.71:8080/api/order/process ',body, config)
     .subscribe(res=>{
       
       console.log(res, 'result from post')
               // this.modalReference.close();
             alertFunctions.typeSuccess(res['message']);

     });

       var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this._htc.get('http://3.86.186.71:8080/api/order/?ref=' + this.id, config)
     .subscribe(res=>{
        this.orderDetails = res;

       console.log(this.orderDetails)
     });
    
  }

    buttonClicked(orderId, modal2){
        this.orderID = orderId;
                        this.modalService.open(modal2).result.then((result) => {
     console.log(orderId)

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    }

    addDeliveryMan(orderid, delieverymanid){

var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = {
             orderId:orderid,
         }
         console.log(body)

        this._htc.post('http://3.86.186.71:8080/api/order/assign-to-pickup',body, config)
     .subscribe(res=>{
       
       console.log(res, 'result from post')
               // this.modalReference.close();
             alertFunctions.typeSuccess(res['message']);

     });

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

  addNew(modal2, orderId){
                this.modalService.open(modal2).result.then((result) => {
     console.log(orderId)

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
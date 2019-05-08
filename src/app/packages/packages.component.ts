import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import * as alertFunctions from '../shared/data/sweet-alerts';

import swal from 'sweetalert2';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

     rows = [];
     selected: any[] = [];
     closeResult: string;
     modalReference: any;
     packages;
     token;
     temp = [];
     printX;
     addPackageForm;
     public nowEditing;
     public errorMsg = '';
  constructor(private http:HttpClient,private modalService: NgbModal,public toastr: ToastsManager, private _fbuilder: FormBuilder,
 ) { 

 this.token =  JSON.parse( localStorage.getItem('currentUser'));
          this.token = this.token.token;

 var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
     this.http.get('http://3.86.186.71:8080/api/package/', config)
     .subscribe(res=>{

        this.packages = res['packages'];

 
       console.log(res)
     });

  }

  ngOnInit() {

           this.addPackageForm = this._fbuilder.group({

     
        name: [''],
        amount:[''],
        carpets: [''],
        homeItems: [''],
        clothes: [''],
    })


  }

  onSelect(event, modal) {
        console.log(event);

        localStorage.setItem('package', JSON.stringify(event))
     console.log(localStorage.getItem('package'))

        this.nowEditing = JSON.parse(localStorage.getItem('package'));
        console.log(this.nowEditing, 'currentItem in local storage')
       let a = this.modalService.open(modal);


        a.result.then((result) => {
        console.log( a.componentInstance.event, 'component instance')

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


deletePackage(id){
  var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = this.addPackageForm.value
         console.log(body)

        this.http.delete('http://3.86.186.71:8080/api/package/' + this.nowEditing._id, config)
     .subscribe(res=>{
       
       console.log(res, 'result from post')
     });

      alertFunctions.typeSuccess('Package deleted successfully!');

const myInterval = Observable.interval(3000);
    myInterval.subscribe((x : number)=>{
      this.printX=x;

      location.reload();

    });

    }


  editPackage(user){
    


    if (this.addPackageForm) {
        console.log(this.addPackageForm.value)
      // if(this.loginForm.username !== undefined && this.loginForm.username !== null &&
      //   this.loginForm.password !== undefined && this.loginForm.password !== null){
      //     //Call Login service for validate username and password.
         var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = this.addPackageForm.value
         console.log(body)

        this.http.patch('http://3.86.186.71:8080/api/package/' + this.nowEditing._id ,body, config)
     .subscribe(res=>{
       
       console.log(res, 'result from post')
     });

   alertFunctions.typeSuccess('Package Updated successfully!');

const myInterval = Observable.interval(3000);
    myInterval.subscribe((x : number)=>{
      this.printX=x;

      location.reload();

    });

      
    }
    else{
      this.errorMsg = 'Adding Service failed, Please try again!';
    }
  }
  
  


  addPackage(user){
    if (this.addPackageForm) {
        console.log(this.addPackageForm.value)
      // if(this.loginForm.username !== undefined && this.loginForm.username !== null &&
      //   this.loginForm.password !== undefined && this.loginForm.password !== null){
      //     //Call Login service for validate username and password.
         var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = this.addPackageForm.value
         console.log(body)

        this.http.post('http://3.86.186.71:8080/api/package',body, config)
     .subscribe(res=>{
       
       console.log(res, 'result from post')
     });

 alertFunctions.typeSuccess('Package Added successfully!');

const myInterval = Observable.interval(3000);
    myInterval.subscribe((x : number)=>{
      this.printX=x;

      location.reload();

    });

      
    }
    else{
      this.errorMsg = 'Adding Service failed, Please try again!';
    }
  }
  

}

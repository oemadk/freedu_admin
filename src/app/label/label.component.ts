import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
	id;

  constructor(private router: Router,
        	  private route: ActivatedRoute, 
              private _htc:HttpClient) { 
			this.route.snapshot.paramMap.get('id')
			this.id = this.route.snapshot.paramMap.get('id')
console.log(this.id, 'label to print');

  }

  print(){
  	window.print()

  }

  ngOnInit() {
  }

}

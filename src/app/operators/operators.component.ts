import { Component,ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

declare var require: any;
const data: any = require('../shared/data/users.json');

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {
  rows = [];
    selected: any[] = [];
  	closeResult: string;
modalReference: any;

    temp = [];
    columns = [
        { name: 'id' },
        { prop: 'name' },
        { name: 'package' },
        { name: 'orders' },
        { name: 'address' },
        { name: 'number' },
        { name: 'date' },
    ];

    @ViewChild(DatatableComponent) table: DatatableComponent;
constructor(private modalService: NgbModal) {
        this.temp = [...data];
        this.rows = data;
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

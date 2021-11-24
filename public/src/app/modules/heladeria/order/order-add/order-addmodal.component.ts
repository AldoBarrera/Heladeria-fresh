import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { OrderService } from '../shared/order.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['order'].component.name.toLowerCase()  + '-addform2modal',
  templateUrl: './order-addmodal.component.html',
  styleUrls: ['./order-addmodal.component.css'],
  providers:  [FormsService]
})
export class OrderAddModalComponent extends CommonsAddComponent {

  @Output() onCurrentDataChange = new EventEmitter();
  forms : any = [];
  @Input() isConfirm: any;
  constructor(router: Router, route: ActivatedRoute, orderService: OrderService, formsService: FormsService) 
  {    
    super(router, route, orderService, formsService);    
    this.name = config['order'].component.name;
	  this.pref = config['order'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    
    
    this.controlsJson = config['order'].model; 
    let date = new Date();
    date.setHours(0,0,0,0)  
    this.controlsJson[3].value = date.toISOString().substr(0, 10);
    //this.controlsJson[3].readonly = true;
    this.controlsJson[2].value = this.generateName();
    //this.controlsJson[2].readonly = true;
	  this.components = config;
    super.createForm();    
  }

  generateName() {
      if (this.data.length == 0) return 1;
      this.data.sort((a, b) => {
        if (parseInt(a.ordn_name , 10 ) > parseInt(b.ordn_name, 10 )) {
          return 1;
        }
        if (parseInt(a.ordn_name , 10 ) < parseInt(b.ordn_name, 10 )) {
          return -1;
        }
        return 0;
      });

      return parseInt(this.data[this.data.length - 1].ordn_name, 10) + 1;
      
  };
  onSubmit(form) {
    super.onSubmit(form);
    
  } 
  onCompleteSubmit(data) {
    this.onCurrentDataChange.emit(data);
  }
  
  refresh() {
    this.controlsJson = config['order'].model;    
    let date = new Date();
    date.setHours(0,0,0,0)  
    this.controlsJson[3].value = date.toISOString().substr(0, 10);
    //this.controlsJson[3].readonly = true;
    this.controlsJson[2].value = this.generateName();
    //this.controlsJson[2].readonly = true;
    
	  this.components = config;
    super.updateForm();
    this.forms.controls["ordn_date"].setValue( date.toISOString().substr(0, 10));
    this.forms.controls["ordn_name"].setValue( this.generateName());
  }

  onCompleteForm(form) {
    this.forms = form;
  }

  print() {
    window.print();  
  }
}

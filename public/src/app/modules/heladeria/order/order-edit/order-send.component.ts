import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { OrderService } from '../shared/order.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['orderSend'].component.name.toLowerCase()  + '-addform',
  templateUrl: './order-send.component.html',
  styleUrls: ['./order-send.component.css'],
  providers:  [FormsService]
})
export class OrderSendComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, orderService: OrderService, formsService: FormsService) 
  {    
    super(router, route, orderService, formsService);    
    this.name = config['orderSend'].component.name;
	  this.pref = config['orderSend'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['orderSend'].model;
	  this.components = config;
    this.controlsJson[2].value = "dsdafsdfdsgggggggg";
    super.createForm();  
  }
  responseData(data) {    
    if (data) {
      for (const property in data) {
        for (const control of this.controls) {
          if (control.key == property) {
            if (property=="ordn_send")
              control.value = true;
            else 
              control.value = data[property];
          }
        }
      if (property=="ordn_send")
      this.form.controls[property].setValue(true);
      else
        this.form.controls[property].setValue(data[property]);
      }
      
      
    } 
  }

  onSubmit(form) {
    if (!form) { return; }
    let singleData = this.singledata;
    this.commonService.editDataAsObserver(form, this.singledata[this.keyName]).subscribe((data) => {
      this.commonService.data.editElement(data);
      this.commonService.sendCommand( { type: this.name , data: data, action:"edit" } );  
      this.router.navigate(['/order'])
         
    });
  }
  
}

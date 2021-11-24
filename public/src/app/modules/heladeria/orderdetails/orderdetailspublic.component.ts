import { Component, Input,Output, EventEmitter } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {OrderDetailsService} from "./shared/orderdetails.service";

@Component({
  selector: 'app-' + config['orderDetails'].component.name.toLowerCase() + 'public',
  templateUrl: './orderdetailspublic.component.html',
  styleUrls: ['./orderdetailspublic.component.css']
})
export class OrderDetailsPublicComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  @Input() order: any = {};
  @Output() onCompleteData = new EventEmitter();
 
  constructor(private orderDetailsService: OrderDetailsService) { 
    super(orderDetailsService);
    this.name = config['orderDetails'].component.name  ;
	  this.pref = config['orderDetails'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
    //const result = this.data.filter(orderDetails => orderDetails.ordd_ordn_id === this.order._id);
  }
  addElements (data: any[]) {
    if (this.data.length == 0)
     this.data.addElements(data);
    else {
     //this.data=CommonsArray.create();
     this.data.addElementsMissing(data);
    }
    this.onCompleteData.emit(data);
 }
}

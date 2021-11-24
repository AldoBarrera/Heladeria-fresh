import { Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {OrderDetailsService} from "./shared/orderdetails.service";

@Component({
  selector: 'app-' + config['orderDetails'].component.name.toLowerCase() ,
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderDetailsComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  @Input() order: any = {};
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
}

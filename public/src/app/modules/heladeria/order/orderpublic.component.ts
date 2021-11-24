import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {OrderService} from "./shared/order.service";

@Component({
  selector: 'app-' + config['order'].component.name.toLowerCase() +'public',
  templateUrl: './orderpublic.component.html',
  styleUrls: ['./orderpublic.component.css']
})
export class OrderPublicComponent extends CommonsComponent {

  currentOrder: any ;
  @Input() datafromadd: any[] = [];
  @Output() onCurrentDataChange = new EventEmitter();
  @Input() order: any = {};
  constructor(private orderService: OrderService) { 
    super(orderService);
    this.name = config['order'].component.name  ;
	  this.pref = config['order'].component.prefix  ;
	  this.keyName =  "_id";
  }

  addElements (data: any[]) {
    if (this.data.length == 0)
     this.data.addElements(data);
    else {
     //this.data=CommonsArray.create();
     this.data.addElementsMissing(data);
    }
    if(data.length > 0 ) {
      this.currentData = JSON.parse(JSON.stringify(data[data.length - 1]));
      this.onCurrentDataChange.emit(this.currentData)
    }
    
 }

  ngOnInit() {    
    super.ngOnInit(); 
    this.data.sort((a, b) => {
      if (parseInt(a.ordn_name, 10 ) > parseInt(b.ordn_name, 10)) {
        return 1;
      }
      if (parseInt(a.ordn_name , 10 ) < parseInt(b.ordn_name, 10 )) {
        return -1;
      }
      return 0;
    });
  }

  ngOnChange(changes) {
    console.log(changes);
  }

  OnChangeDropdown(orderId){
    const result = this.data.find(item=>item._id==orderId);
    this.currentData = JSON.parse(JSON.stringify(result));
    this.onCurrentDataChange.emit(this.currentData)
  }
}

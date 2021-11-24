import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {InventoryService} from "./shared/inventory.service";

@Component({
  selector: 'app-' + config['inventory'].component.name.toLowerCase() ,
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  @Input() onlyRead: Boolean = false;
  @Output() onCompleteData = new EventEmitter();
  constructor(private inventoryService: InventoryService) { 
    super(inventoryService);
    this.name = config['inventory'].component.name  ;
	  this.pref = config['inventory'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
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

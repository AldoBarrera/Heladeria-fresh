import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {FieldsService} from "./shared/fields.service";

@Component({
  selector: 'app-' + config['fields'].component.name.toLowerCase() ,
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private fieldsService: FieldsService) { 
    super(fieldsService);
    this.name = config['fields'].component.name  ;
	  this.pref = config['fields'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}

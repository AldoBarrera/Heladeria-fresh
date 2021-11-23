import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {GrupFieldsPrivileguesService} from "./shared/grupfieldsprivilegues.service";

@Component({
  selector: 'app-' + config['grupFieldsPrivilegues'].component.name.toLowerCase() ,
  templateUrl: './grupfieldsprivilegues.component.html',
  styleUrls: ['./grupfieldsprivilegues.component.css']
})
export class GrupFieldsPrivileguesComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private grupFieldsPrivileguesService: GrupFieldsPrivileguesService) { 
    super(grupFieldsPrivileguesService);
    this.name = config['grupFieldsPrivilegues'].component.name  ;
	  this.pref = config['grupFieldsPrivilegues'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}

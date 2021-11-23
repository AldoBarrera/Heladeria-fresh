import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {GrupApigPrivileguesService} from "./shared/grupapigprivilegues.service";

@Component({
  selector: 'app-' + config['grupApigPrivilegues'].component.name.toLowerCase() ,
  templateUrl: './grupapigprivilegues.component.html',
  styleUrls: ['./grupapigprivilegues.component.css']
})
export class GrupApigPrivileguesComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private grupApigPrivileguesService: GrupApigPrivileguesService) { 
    super(grupApigPrivileguesService);
    this.name = config['grupApigPrivilegues'].component.name  ;
	  this.pref = config['grupApigPrivilegues'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}

import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {GrupApisPrivileguesService} from "./shared/grupapisprivilegues.service";

@Component({
  selector: 'app-' + config['grupApisPrivilegues'].component.name.toLowerCase() ,
  templateUrl: './grupapisprivilegues.component.html',
  styleUrls: ['./grupapisprivilegues.component.css']
})
export class GrupApisPrivileguesComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private grupApisPrivileguesService: GrupApisPrivileguesService) { 
    super(grupApisPrivileguesService);
    this.name = config['grupApisPrivilegues'].component.name  ;
	  this.pref = config['grupApisPrivilegues'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}

import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {ApiGeneralsService} from "./shared/apigenerals.service";

@Component({
  selector: 'app-' + config['apiGenerals'].component.name.toLowerCase() ,
  templateUrl: './apigenerals.component.html',
  styleUrls: ['./apigenerals.component.css']
})
export class ApiGeneralsComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private apiGeneralsService: ApiGeneralsService) { 
    super(apiGeneralsService);
    this.name = config['apiGenerals'].component.name  ;
	  this.pref = config['apiGenerals'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}

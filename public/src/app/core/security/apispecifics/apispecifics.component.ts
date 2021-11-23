import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {ApiSpecificsService} from "./shared/apispecifics.service";

@Component({
  selector: 'app-' + config['apiSpecifics'].component.name.toLowerCase() ,
  templateUrl: './apispecifics.component.html',
  styleUrls: ['./apispecifics.component.css']
})
export class ApiSpecificsComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private apiSpecificsService: ApiSpecificsService) { 
    super(apiSpecificsService);
    this.name = config['apiSpecifics'].component.name  ;
	  this.pref = config['apiSpecifics'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}

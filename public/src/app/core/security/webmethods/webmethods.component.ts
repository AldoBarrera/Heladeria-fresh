import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {WebMethodsService} from "./shared/webmethods.service";

@Component({
  selector: 'app-' + config['webMethods'].component.name.toLowerCase() ,
  templateUrl: './webmethods.component.html',
  styleUrls: ['./webmethods.component.css']
})
export class WebMethodsComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private webMethodsService: WebMethodsService) { 
    super(webMethodsService);
    this.name = config['webMethods'].component.name  ;
	  this.pref = config['webMethods'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}

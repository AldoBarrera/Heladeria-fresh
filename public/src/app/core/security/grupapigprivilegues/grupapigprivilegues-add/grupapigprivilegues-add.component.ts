import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { GrupApigPrivileguesService } from '../shared/grupapigprivilegues.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['grupApigPrivilegues'].component.name.toLowerCase()  + '-addform',
  templateUrl: './grupapigprivilegues-add.component.html',
  styleUrls: ['./grupapigprivilegues-add.component.css'],
  providers:  [FormsService]
})
export class GrupApigPrivileguesAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, grupApigPrivileguesService: GrupApigPrivileguesService, formsService: FormsService) 
  {    
    super(router, route, grupApigPrivileguesService, formsService);    
    this.name = config['grupApigPrivilegues'].component.name;
	  this.pref = config['grupApigPrivilegues'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['grupApigPrivilegues'].model;    
	  this.components = config;
    super.createForm();    
  }
}

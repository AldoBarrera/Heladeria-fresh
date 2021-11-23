import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { GrupFieldsPrivileguesService } from '../shared/grupfieldsprivilegues.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['grupFieldsPrivilegues'].component.name.toLowerCase()  + '-addform',
  templateUrl: './grupfieldsprivilegues-add.component.html',
  styleUrls: ['./grupfieldsprivilegues-add.component.css'],
  providers:  [FormsService]
})
export class GrupFieldsPrivileguesAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, grupFieldsPrivileguesService: GrupFieldsPrivileguesService, formsService: FormsService) 
  {    
    super(router, route, grupFieldsPrivileguesService, formsService);    
    this.name = config['grupFieldsPrivilegues'].component.name;
	  this.pref = config['grupFieldsPrivilegues'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['grupFieldsPrivilegues'].model;    
	  this.components = config;
    super.createForm();    
  }
}

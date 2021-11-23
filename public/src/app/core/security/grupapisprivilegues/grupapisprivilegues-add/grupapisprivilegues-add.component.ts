import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { GrupApisPrivileguesService } from '../shared/grupapisprivilegues.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['grupApisPrivilegues'].component.name.toLowerCase()  + '-addform',
  templateUrl: './grupapisprivilegues-add.component.html',
  styleUrls: ['./grupapisprivilegues-add.component.css'],
  providers:  [FormsService]
})
export class GrupApisPrivileguesAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, grupApisPrivileguesService: GrupApisPrivileguesService, formsService: FormsService) 
  {    
    super(router, route, grupApisPrivileguesService, formsService);    
    this.name = config['grupApisPrivilegues'].component.name;
	  this.pref = config['grupApisPrivilegues'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['grupApisPrivilegues'].model;    
	  this.components = config;
    super.createForm();    
  }
}

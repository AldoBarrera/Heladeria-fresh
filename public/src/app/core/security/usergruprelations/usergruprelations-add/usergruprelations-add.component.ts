import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { UserGrupRelationsService } from '../shared/usergruprelations.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['userGrupRelations'].component.name.toLowerCase()  + '-addform',
  templateUrl: './usergruprelations-add.component.html',
  styleUrls: ['./usergruprelations-add.component.css'],
  providers:  [FormsService]
})
export class UserGrupRelationsAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, userGrupRelationsService: UserGrupRelationsService, formsService: FormsService) 
  {    
    super(router, route, userGrupRelationsService, formsService);    
    this.name = config['userGrupRelations'].component.name;
	  this.pref = config['userGrupRelations'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['userGrupRelations'].model;    
	  this.components = config;
    super.createForm();    
  }
}

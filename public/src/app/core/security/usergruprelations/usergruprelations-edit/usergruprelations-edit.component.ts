import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { UserGrupRelationsService } from '../shared/usergruprelations.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['userGrupRelations'].component.name.toLowerCase()  + '-addform',
  templateUrl: './usergruprelations-edit.component.html',
  styleUrls: ['./usergruprelations-edit.component.css'],
  providers:  [FormsService]
})
export class UserGrupRelationsEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, userGrupRelationsService: UserGrupRelationsService, formsService: FormsService) 
  {    
    super(router, route, userGrupRelationsService, formsService);    
    this.name = config['userGrupRelations'].component.name;
	  this.pref = config['userGrupRelations'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['userGrupRelations'].model;
	  this.components = config;
    super.createForm();  
  }
  
}

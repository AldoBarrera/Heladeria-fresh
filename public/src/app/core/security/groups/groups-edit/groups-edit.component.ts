import { Component  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsEditComponent } from '../../../../common/commons-edit/commons-edit.component';

import {default as config} from '../../config/config.json';


import { GroupsService } from '../shared/groups.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['groups'].component.name.toLowerCase()  + '-addform',
  templateUrl: './groups-edit.component.html',
  styleUrls: ['./groups-edit.component.css'],
  providers:  [FormsService]
})
export class GroupsEditComponent extends CommonsEditComponent {
 
  constructor(router: Router, route: ActivatedRoute, groupsService: GroupsService, formsService: FormsService) 
  {    
    super(router, route, groupsService, formsService);    
    this.name = config['groups'].component.name;
	  this.pref = config['groups'].component.prefix  ;
	  this.keyName = "_id"  ;
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['groups'].model;
	  this.components = config;
    super.createForm();  
  }
  
}

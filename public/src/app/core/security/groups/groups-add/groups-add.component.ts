import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsAddComponent } from '../../../../common/commons-add/commons-add.component';

import {default as config} from '../../config/config.json';

import { GroupsService } from '../shared/groups.service';
import { FormsService } from '../../../../dynamicforms/forms/shared/forms.service';

@Component({
  selector: 'app-' + config['groups'].component.name.toLowerCase()  + '-addform',
  templateUrl: './groups-add.component.html',
  styleUrls: ['./groups-add.component.css'],
  providers:  [FormsService]
})
export class GroupsAddComponent extends CommonsAddComponent {

  constructor(router: Router, route: ActivatedRoute, groupsService: GroupsService, formsService: FormsService) 
  {    
    super(router, route, groupsService, formsService);    
    this.name = config['groups'].component.name;
	  this.pref = config['groups'].component.prefix;
	  this.keyName = "_id";
	  this.components = config;
  }

  createForm() {
    this.controlsJson = config['groups'].model;    
	  this.components = config;
    super.createForm();    
  }
}

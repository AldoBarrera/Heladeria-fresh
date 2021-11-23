import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { GroupsService } from '../shared/groups.service';

@Component({
  selector: 'app-' + config['groups'].component.name.toLowerCase() + '-form',
  templateUrl: './groups-detail.component.html',
  styleUrls: ['./groups-detail.component.css']
})
export class GroupsDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, groupsService: GroupsService) 
  {
    super(router, route, groupsService);
    this.name = config['groups'].component.name ;
	  this.pref = config['groups'].component.prefix  ;
  }
}

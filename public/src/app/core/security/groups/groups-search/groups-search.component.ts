import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { GroupsService } from '../shared/groups.service';

@Component({
  selector: 'app-' + config['groups'].component.name.toLowerCase() + '-form',
  templateUrl: './groups-search.component.html',
  styleUrls: ['./groups-search.component.css']
})
export class GroupsSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, groupsService: GroupsService) 
  {
    super(router, route, groupsService);
    this.name = config['groups'].component.name ;
	  this.pref = config['groups'].component.prefix  ;
  }
}

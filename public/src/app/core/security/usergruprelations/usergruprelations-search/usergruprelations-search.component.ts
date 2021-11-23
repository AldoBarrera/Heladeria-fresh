import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { UserGrupRelationsService } from '../shared/usergruprelations.service';

@Component({
  selector: 'app-' + config['userGrupRelations'].component.name.toLowerCase() + '-form',
  templateUrl: './usergruprelations-search.component.html',
  styleUrls: ['./usergruprelations-search.component.css']
})
export class UserGrupRelationsSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, userGrupRelationsService: UserGrupRelationsService) 
  {
    super(router, route, userGrupRelationsService);
    this.name = config['userGrupRelations'].component.name ;
	  this.pref = config['userGrupRelations'].component.prefix  ;
  }
}

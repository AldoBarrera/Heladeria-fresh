import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { UserGrupRelationsService } from '../shared/usergruprelations.service';

@Component({
  selector: 'app-' + config['userGrupRelations'].component.name.toLowerCase() + '-form',
  templateUrl: './usergruprelations-detail.component.html',
  styleUrls: ['./usergruprelations-detail.component.css']
})
export class UserGrupRelationsDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, userGrupRelationsService: UserGrupRelationsService) 
  {
    super(router, route, userGrupRelationsService);
    this.name = config['userGrupRelations'].component.name ;
	  this.pref = config['userGrupRelations'].component.prefix  ;
  }
}

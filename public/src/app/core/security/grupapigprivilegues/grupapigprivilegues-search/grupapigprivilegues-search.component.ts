import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { GrupApigPrivileguesService } from '../shared/grupapigprivilegues.service';

@Component({
  selector: 'app-' + config['grupApigPrivilegues'].component.name.toLowerCase() + '-form',
  templateUrl: './grupapigprivilegues-search.component.html',
  styleUrls: ['./grupapigprivilegues-search.component.css']
})
export class GrupApigPrivileguesSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, grupApigPrivileguesService: GrupApigPrivileguesService) 
  {
    super(router, route, grupApigPrivileguesService);
    this.name = config['grupApigPrivilegues'].component.name ;
	  this.pref = config['grupApigPrivilegues'].component.prefix  ;
  }
}

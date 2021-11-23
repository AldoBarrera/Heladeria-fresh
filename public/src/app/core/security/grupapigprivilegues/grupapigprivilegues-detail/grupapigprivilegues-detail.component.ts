import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { GrupApigPrivileguesService } from '../shared/grupapigprivilegues.service';

@Component({
  selector: 'app-' + config['grupApigPrivilegues'].component.name.toLowerCase() + '-form',
  templateUrl: './grupapigprivilegues-detail.component.html',
  styleUrls: ['./grupapigprivilegues-detail.component.css']
})
export class GrupApigPrivileguesDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, grupApigPrivileguesService: GrupApigPrivileguesService) 
  {
    super(router, route, grupApigPrivileguesService);
    this.name = config['grupApigPrivilegues'].component.name ;
	  this.pref = config['grupApigPrivilegues'].component.prefix  ;
  }
}

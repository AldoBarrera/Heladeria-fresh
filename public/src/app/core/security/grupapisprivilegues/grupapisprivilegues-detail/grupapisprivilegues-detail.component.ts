import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { GrupApisPrivileguesService } from '../shared/grupapisprivilegues.service';

@Component({
  selector: 'app-' + config['grupApisPrivilegues'].component.name.toLowerCase() + '-form',
  templateUrl: './grupapisprivilegues-detail.component.html',
  styleUrls: ['./grupapisprivilegues-detail.component.css']
})
export class GrupApisPrivileguesDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, grupApisPrivileguesService: GrupApisPrivileguesService) 
  {
    super(router, route, grupApisPrivileguesService);
    this.name = config['grupApisPrivilegues'].component.name ;
	  this.pref = config['grupApisPrivilegues'].component.prefix  ;
  }
}

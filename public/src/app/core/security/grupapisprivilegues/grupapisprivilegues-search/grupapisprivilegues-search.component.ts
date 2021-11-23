import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { GrupApisPrivileguesService } from '../shared/grupapisprivilegues.service';

@Component({
  selector: 'app-' + config['grupApisPrivilegues'].component.name.toLowerCase() + '-form',
  templateUrl: './grupapisprivilegues-search.component.html',
  styleUrls: ['./grupapisprivilegues-search.component.css']
})
export class GrupApisPrivileguesSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, grupApisPrivileguesService: GrupApisPrivileguesService) 
  {
    super(router, route, grupApisPrivileguesService);
    this.name = config['grupApisPrivilegues'].component.name ;
	  this.pref = config['grupApisPrivilegues'].component.prefix  ;
  }
}

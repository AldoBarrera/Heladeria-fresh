import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { GrupFieldsPrivileguesService } from '../shared/grupfieldsprivilegues.service';

@Component({
  selector: 'app-' + config['grupFieldsPrivilegues'].component.name.toLowerCase() + '-form',
  templateUrl: './grupfieldsprivilegues-search.component.html',
  styleUrls: ['./grupfieldsprivilegues-search.component.css']
})
export class GrupFieldsPrivileguesSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, grupFieldsPrivileguesService: GrupFieldsPrivileguesService) 
  {
    super(router, route, grupFieldsPrivileguesService);
    this.name = config['grupFieldsPrivilegues'].component.name ;
	  this.pref = config['grupFieldsPrivilegues'].component.prefix  ;
  }
}

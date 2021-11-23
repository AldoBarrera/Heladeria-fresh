import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { GrupFieldsPrivileguesService } from '../shared/grupfieldsprivilegues.service';

@Component({
  selector: 'app-' + config['grupFieldsPrivilegues'].component.name.toLowerCase() + '-form',
  templateUrl: './grupfieldsprivilegues-detail.component.html',
  styleUrls: ['./grupfieldsprivilegues-detail.component.css']
})
export class GrupFieldsPrivileguesDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, grupFieldsPrivileguesService: GrupFieldsPrivileguesService) 
  {
    super(router, route, grupFieldsPrivileguesService);
    this.name = config['grupFieldsPrivilegues'].component.name ;
	  this.pref = config['grupFieldsPrivilegues'].component.prefix  ;
  }
}

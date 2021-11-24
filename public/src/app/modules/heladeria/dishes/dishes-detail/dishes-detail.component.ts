import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { DishesService } from '../shared/dishes.service';

@Component({
  selector: 'app-' + config['dishes'].component.name.toLowerCase() + '-form',
  templateUrl: './dishes-detail.component.html',
  styleUrls: ['./dishes-detail.component.css']
})
export class DishesDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, dishesService: DishesService) 
  {
    super(router, route, dishesService);
    this.name = config['dishes'].component.name ;
	  this.pref = config['dishes'].component.prefix  ;
  }
}

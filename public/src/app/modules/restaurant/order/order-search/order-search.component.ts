import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsSearchComponent } from '../../../../common/commons-search/commons-search.component';

import {default as config} from '../../config/config.json';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-' + config['order'].component.name.toLowerCase() + '-form',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent extends CommonsSearchComponent {
  
  constructor(router: Router, route: ActivatedRoute, orderService: OrderService) 
  {
    super(router, route, orderService);
    this.name = config['order'].component.name ;
	  this.pref = config['order'].component.prefix  ;
  }
}

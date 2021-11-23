import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-' + config['order'].component.name.toLowerCase() + '-form',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, orderService: OrderService) 
  {
    super(router, route, orderService);
    this.name = config['order'].component.name ;
	  this.pref = config['order'].component.prefix  ;
  }
}

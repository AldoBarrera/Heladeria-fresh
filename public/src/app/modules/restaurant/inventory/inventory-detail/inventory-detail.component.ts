import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsDetailComponent } from '../../../../common/commons-detail/commons-detail.component';

import {default as config} from '../../config/config.json';
import { InventoryService } from '../shared/inventory.service';

@Component({
  selector: 'app-' + config['inventory'].component.name.toLowerCase() + '-form',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent extends CommonsDetailComponent {
  
  constructor(router: Router, route: ActivatedRoute, inventoryService: InventoryService) 
  {
    super(router, route, inventoryService);
    this.name = config['inventory'].component.name ;
	  this.pref = config['inventory'].component.prefix  ;
  }
}

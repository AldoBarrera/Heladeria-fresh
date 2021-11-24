import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {DishesService} from "./shared/dishes.service";

@Component({
  selector: 'app-' + config['dishes'].component.name.toLowerCase() ,
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private dishesService: DishesService) { 
    super(dishesService);
    this.name = config['dishes'].component.name  ;
	  this.pref = config['dishes'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}

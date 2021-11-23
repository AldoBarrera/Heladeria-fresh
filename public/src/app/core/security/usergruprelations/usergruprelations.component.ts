import { Component, Input } from '@angular/core';
import {CommonsComponent} from "../../../common/commons.component";
import {default as config} from '../config/config.json';
import {UserGrupRelationsService} from "./shared/usergruprelations.service";

@Component({
  selector: 'app-' + config['userGrupRelations'].component.name.toLowerCase() ,
  templateUrl: './usergruprelations.component.html',
  styleUrls: ['./usergruprelations.component.css']
})
export class UserGrupRelationsComponent extends CommonsComponent {

  @Input() datafromadd: any[] = [];
  constructor(private userGrupRelationsService: UserGrupRelationsService) { 
    super(userGrupRelationsService);
    this.name = config['userGrupRelations'].component.name  ;
	  this.pref = config['userGrupRelations'].component.prefix  ;
	  this.keyName =  "_id";
  }
  ngOnInit() {    
    super.ngOnInit(); 
  }
}

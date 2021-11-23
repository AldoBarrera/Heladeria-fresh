import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../../message.service';
import { CommonsService } from '../../../../common/shared/commons.service';
import {default as config} from '../../config/config.json';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DishesPublicService extends CommonsService {

  constructor(http: HttpClient,
    messageService: MessageService) 
  { 
    super(http, messageService);
    this.urlRelative = "/dishes";
    this.urlModule = "/api/v1/restaurant";
    this.url = environment.appConfig.url +  this.urlModule + this.urlRelative ;
    this.name = 'dishes';
	  this.pref = 'disp';
    this.setKeyName("_id");
    this.createRemoteEvents();
  } 
}

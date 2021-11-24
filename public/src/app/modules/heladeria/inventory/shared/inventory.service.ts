import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MessageService } from '../../../../message.service';
import { CommonsService } from '../../../../common/shared/commons.service';
import {default as config} from '../../config/config.json';
import { environment } from '../../../../../environments/environment';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CommonsModel } from '../../../../common/shared/data';

@Injectable({ providedIn: 'root' })
export class InventoryService extends CommonsService {

  constructor(http: HttpClient,
    messageService: MessageService) 
  { 
    super(http, messageService);
    this.urlRelative = (config["inventory"].component.urlRelative).toLowerCase();
    this.urlModule = config.module.urlRelative;
    this.url = environment.appConfig.url +  this.urlModule + this.urlRelative ;
    this.name = config['inventory'].component.name;
	  this.pref = config['inventory'].component.prefix  ;
    this.setKeyName("_id");
    this.createRemoteEvents();
  } 
  getAllDataAsObserver (populated:Boolean = null, date:Date = new Date()): Observable<CommonsModel[]> {
    let params = new HttpParams();
    date.setHours(0,0,0,0);
    params = populated?params.append("populate", populated.toString()):params;

    params = date?params.append("date",  date.toISOString().substr(0, 10)):params;
    return this.http.get<CommonsModel[]>(this.url,{params})
      .pipe(
        tap(CommonsModel => this.log('fetched Data')),
        catchError(this.handleError('getData', []))
      );
  }
}

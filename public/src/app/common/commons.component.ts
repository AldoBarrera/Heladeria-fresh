import { Component, OnInit, AfterViewInit, OnChanges  } from '@angular/core';
import {CommonsService} from "./shared/commons.service";
import {CommonsModel} from "./shared/data";
import { CommonsUtil } from './shared/commons.util';
import { CommonsArray } from './shared/commons.array';
@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styleUrls: ['./commons.component.css']
})
export class CommonsComponent implements AfterViewInit, OnInit, OnChanges  {

  protected data = CommonsArray.create(); 
  public currentData: any ={};
  protected name: string ;
  protected pref: string ;
  protected keyName: string ;
  protected serverMessage: any;
  constructor(protected commonService: CommonsService) { 
    this.data = this.commonService.data;
    this.currentData = this.commonService.currentData;
    
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.commonService.getAllDataAsObserver(true)
      .subscribe(
	  data => {this.addElements(data);this.responseData(data ); }
    );
    
  }

  addElements (data: any[]) {
     if (this.data.length == 0)
      this.data.addElements(data);
     else {
      //this.data=CommonsArray.create();
      this.data.addElementsMissing(data);
     }
  }

  //It si not necessary if we are using services
  createRemoteEvents(remoteMethod:any = null) {
    /*remoteMethod = !remoteMethod?this.remoteMethod:remoteMethod;      
    if(!this.commonService.subscribeSocketAdd)
      CommonsUtil.getRemoteEvents(this.commonService, this.moduleName, remoteMethod, this);  */   
  }

  remoteMethod(data:any, self) {
    //self.data.push(data);
  }
  //-------------------------------------------------

  ngOnChanges(changes) {
    
  }

  responseData(data: CommonsModel[]) {    
  }

  removeData(removeItemId) {
    this.commonService.deleteDataAsObserver(removeItemId).subscribe((data) => {
	  
      this.data.removeElementById(removeItemId);  
      this.commonService.sendCommand( { type: this.name , data: removeItemId, action:"delete" } );       
    });
  } 

}

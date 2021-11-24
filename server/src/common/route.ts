import { Router, Request, Response, NextFunction } from 'express';
import * as App from "./socket";
import SecSecurityModule from '../core/security/sec-security.module'
import {ApigApiGeneralsComponent} from '../core/security/sec-security.module'
import {ApisApiSpecificsComponent} from '../core/security/sec-security.module'
import {WmetWebMethodsComponent} from '../core/security/sec-security.module'

export class CommonRouter extends App.CommonSocket{
  public router: Router
  public commonComponent: any
  public dataRoute: string
  public singleDataRoute: string 
  public dataRouteSearch: string   
  public moduleUrlRelative:string
  public keyName:string
  constructor() {
    super();
    this.router = Router();
  }

  public addSocket(io:any) {
    super.setSocket(io);
    super.connect();
  }

  async GetAllData(req: Request, res: Response, next: NextFunction) {

      let query = req.query;
      let dataResponse;
      let restrict = query.fields?JSON.parse(query.fields.toString()):null;
      if (restrict){
        dataResponse = await this.commonComponent.GetAllRestrictData(restrict);
      } else if(query.populate) {
        dataResponse = await this.commonComponent.GetPopulateData();
      } else {
        dataResponse = await this.commonComponent.GetAllData();
      }
      res.send(dataResponse);
  }

  async FindData(req: Request, res: Response, next: NextFunction) {
    let session=req.session;
      let query = req.query;
      const dataResponse = await this.commonComponent.FindData(query);
      res.send(dataResponse);
  }

  async GetSingleData(req: Request, res: Response, next: NextFunction) {    
      let id = req.params.id;
      let query = req.query;
      let dataResponse;
      if(query.populate) {
        dataResponse = await this.commonComponent.GetPopulateDataById(id);
      } else {
        dataResponse = await this.commonComponent.GetDataById(id);
      }
      res.send(dataResponse);
  }

  async InsertData(req: Request, res: Response, next: NextFunction) {
   
      let data = req.body;
      const dataResponse = await this.commonComponent.InsertData(data);
      if(dataResponse) {
        const dataResponsePopulate = await this.commonComponent.GetPopulateDataById(dataResponse.id);
        res.send(dataResponsePopulate);
      } else {
        res.send(dataResponse);
      }
  }
  
  async UpdateData(req: Request, res: Response, next: NextFunction) {

      let data = req.body;
      let query = {[this.commonComponent.keyName]:req.params.id};
      const dataResponse = await this.commonComponent.UpdateData(query, data);
      if (dataResponse.n == 1 && dataResponse.ok == 1) {
        const dataResponsePopulate = await this.commonComponent.GetPopulateDataById(req.params.id);
        res.send(dataResponsePopulate);
      } else {
        res.send(dataResponse);
      }
  }
  
  async DeleteData(req: Request, res: Response, next: NextFunction) {

      let query = {[this.commonComponent.keyName]:req.params.id};
      const dataResponse = await this.commonComponent.DeleteData(query);
      res.send(dataResponse);

  }
  
  /*public validateRole(token, req: Request, res: Response) {
    return true;
  }*/
  
  async validateRole(token, req: Request, res: Response) {
    var hasRole =  await SecSecurityModule.hasRole(token.content, req);
    return hasRole;
  }


  public async init() {
    await this.setAppis();
    this.router.get(this.dataRoute, this.GetAllData.bind(this));    
    this.router.get(this.singleDataRoute, this.GetSingleData.bind(this));
	  this.router.get(this.dataRouteSearch, this.FindData.bind(this));
    this.router.post(this.dataRoute, this.InsertData.bind(this));
    this.router.put(this.singleDataRoute, this.UpdateData.bind(this));
    this.router.delete(this.singleDataRoute, this.DeleteData.bind(this));
  }

  async setAppis() {
    var resultApig = await ApigApiGeneralsComponent.FindOne({apig_code: this.moduleUrlRelative, apig_description: this.moduleUrlRelative});
    if (resultApig) {
      
      var resultWebMethod = await WmetWebMethodsComponent.FindOne({wmet_name: 'get'});
      var result = await ApisApiSpecificsComponent.FindOne({apis_code: this.dataRoute, apis_description: this.dataRoute, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] });
      if(!result) {
       
        await ApisApiSpecificsComponent.InsertData({apis_code: this.dataRoute, apis_description: this.dataRoute, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] })
      }
      
      var result = await ApisApiSpecificsComponent.FindOne({apis_code: this.singleDataRoute, apis_description: this.singleDataRoute, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] });
      if(!result) {        
        await ApisApiSpecificsComponent.InsertData({apis_code: this.singleDataRoute, apis_description: this.singleDataRoute, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] })
      }

      var result = await ApisApiSpecificsComponent.FindOne({apis_code: this.dataRouteSearch, apis_description: this.dataRouteSearch, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] });
      if(!result) {  
        await ApisApiSpecificsComponent.InsertData({apis_code: this.dataRouteSearch, apis_description: this.dataRouteSearch, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] })
      }

      
      var resultWebMethod = await WmetWebMethodsComponent.FindOne({wmet_name: 'post'});
      var result = await ApisApiSpecificsComponent.FindOne({apis_code: this.dataRoute, apis_description: this.dataRoute, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] });
      if(!result) {
        await ApisApiSpecificsComponent.InsertData({apis_code: this.dataRoute, apis_description: this.dataRoute, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] })
      }

      var resultWebMethod = await WmetWebMethodsComponent.FindOne({wmet_name: 'put'});
      var result = await ApisApiSpecificsComponent.FindOne({apis_code: this.singleDataRoute, apis_description: this.singleDataRoute, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] });
      if(!result) {
        await ApisApiSpecificsComponent.InsertData({apis_code: this.singleDataRoute, apis_description: this.singleDataRoute, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] })
      }

      var resultWebMethod = await WmetWebMethodsComponent.FindOne({wmet_name: 'delete'});
      var result = await ApisApiSpecificsComponent.FindOne({apis_code: this.singleDataRoute, apis_description: this.singleDataRoute, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] });
      if(!result) {
        await ApisApiSpecificsComponent.InsertData({apis_code: this.singleDataRoute, apis_description: this.singleDataRoute, apis_apig_id: resultApig[this.keyName],apis_wmet_id:resultWebMethod[this.keyName] })
      }
    } 

  }
}
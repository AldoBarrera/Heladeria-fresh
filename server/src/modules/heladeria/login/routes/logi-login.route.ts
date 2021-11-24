import { Request, Response, NextFunction } from 'express';
import * as App from "../../../../common/route";
import {logiLoginComponent as LogiLoginComponent}  from "../logi-login.component";
import config from "../../config/config.json";

export class LogiLoginRoute extends App.CommonRouter {

    constructor(login:string, io?: any) {        
        super();
        this.dataRoute = "/login";
        this.singleDataRoute= "/login/:id"; 
	    this.dataRouteSearch = "/loginSearch";
        this.commonComponent=LogiLoginComponent;
        this.moduleName  = login;
        this.moduleUrlRelative = config["module"].urlRelative;
        this.keyName = "_id";
        super.init();
        super.addSocket(io); 
    }

    public async init() {
      super.init();
      this.router.get(this.dataRoute, this.GetAllData.bind(this));
      this.router.get(this.singleDataRoute, this.GetSingleData.bind(this));
      this.router.post(this.dataRoute, this.InsertData.bind(this));
    }
    async GetAllData(req: Request, res: Response, next: NextFunction) {
      let query = req.query;
      let session=req.session;
      if(session.user){
          res.send("Welcome User <a href=\'/logout'>click to logout</a>" + session.user);
      }else
        res.send('login' + session);
    }
    async InsertData(req: Request, res: Response, next: NextFunction) {
   
      if(req.body.logi_user == "luz@gmail.com" && req.body.logi_password == "123"){
        var sessionData = req.session;
         sessionData.user="luz@gmail.com";
         res.send({user: sessionData.user});
      }
      else{
          res.send({user: ""});
      }
    }
    async login(req: Request, res: Response, next: NextFunction) {
      if(req.body.username == "luz@gmail.com" && req.body.password == "123"){
        var sessionData = req.session;
         sessionData.user="luz@gmail.com";
         res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
      }
      else{
          res.send('Invalid username or password');
      }
    }
    async test(req: Request, res: Response, next: NextFunction) {
      let session=req.session;
      if(session.user){
          res.send("Welcome User <a href=\'/logout'>click to logout</a>" + session.user);
      }else
        res.send('login' + session);
    }
}


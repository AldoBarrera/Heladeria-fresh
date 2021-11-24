import * as path from 'path';
import express from 'express';
import * as bodyParser from 'body-parser';
import session from 'express-session';
const cookieParser = require("cookie-parser");
import * as log4js from 'log4js';

import log4jsconfig from './config/log4js.json';
//var log4jsconfig = require('./config/log4js.json');
log4js.configure(log4jsconfig);

import SecSecurityModule from "./core/security/sec-security.module" 

import ResRestaurantModule from "./modules/heladeria/res-restaurant.module" 


declare module "express-session" {
  interface Session {
    user: string;
  }
}
//var cors = require('cors');
// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public socket;
  private io;
  public oneDay: number = 1000 * 60 * 60 * 24;
  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.Security();
  }

  // Configure Express middleware.
  private middleware(): void {

    this.express.use(bodyParser.json({limit: '50mb'}));
    this.express.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

    //this.express.use(cors({origin: 'http://localhost:4200'}));
    this.express.use(function (req, res, next) {
      let httpRequest = new Date() + req.method + req.url;
      console.log(httpRequest);
      next();
    });

    this.express.use(cookieParser());
    this.express.use(session({
      secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
      saveUninitialized:true,
      cookie: { maxAge: this.oneDay },
      resave: false 
    }));

    
  }

  
  
  // Configure Security.
  private Security(): void {
  }

  //Configure Sockets
  public addSocketIO(io: any): void {
    this.io = io;
    this.routes();

  }

  
  // Configure API endpoints.
  private routes(): void {

    let router = express.Router();
    router.use(express.static(path.join(__dirname, '../../public/dist/public')));
        this.express.use('/', router);
        this.express.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
        this.express.use('/errorpermission', router); 
        SecSecurityModule.addRoutes(this.express, this.io);
    

    /*this.express.get('/api/v1/restaurant/test',(req,res) => {
      let session=req.session;
      if(session.user){
          res.send("Welcome User <a href=\'/logout'>click to logout</a>" + session.user);
      }else
      res.send('login' + session);
    });
    
    

    this.express.post('/api/v1/restaurant/login',(req,res) => {
      if(req.body.username == "luz@gmail.com" && req.body.password == "123"){
         var sessionData = req.session;
          sessionData.user="luz@gmail.com";
          res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
      }
      else{
          res.send('Invalid username or password');
      }
    })

    this.express.post('/api/v1/restaurant/logout',(req,res) => {
      req.session.destroy(()=>
        console.log("Logout")
      )
      res.redirect('/');
    })*/

    ResRestaurantModule.addRoutes(this.express, this.io); 
    this.express.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../../public/dist/public/index.html'));
    });    
    

  }

}

export default new App();

var Keycloak = require('keycloak-connect');
var session = require('express-session');
var connect = require('./connect');
var loginService = process.env.LOGIN_SERVICE || "localhost";
var loginPort = process.env.LOGIN_PORT || "8080";
var protocol = process.env.LOGIN_PROTOCOL || "http";
var loginSecret = process.env.LOGIN_SECRET || "a2569f29-19a8-499f-88fa-adc45894ebf1";
var loginRealm = process.env.LOGIN_REALM || "master";
var loginClient = process.env.LOGIN_CLIENT || "fresh";

var memoryStore = new session.MemoryStore();

let kcConfig = {
    clientId: loginClient,
    bearerOnly: true,  
    serverUrl: protocol + '://' + loginService + ':' + loginPort + '/auth',
    realm: loginRealm
  };

  class KeycloakService {
    public sessionConfig:any;
    public keycloackService : any;
    constructor() {
       this.keycloackService = new Keycloak({ store: memoryStore }, kcConfig);
       this.sessionConfig = session({
        secret: loginSecret,
        resave: false,
        saveUninitialized: true,
        store: memoryStore
      })
    }

    public getInstance() {
        return this.keycloackService;
    }

    public getToken(user: string,password: string) {
      return connect.GetToken(user, password);
    }
  }

  export = new KeycloakService();

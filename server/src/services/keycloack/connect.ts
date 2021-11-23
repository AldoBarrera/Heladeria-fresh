const configrequest = require('./configrequest');
const axios = require('axios');
var qs = require('qs');
var loginService = process.env.LOGIN_SERVICE || "localhost";
var loginPort = process.env.LOGIN_PORT || "8080";
var protocol = process.env.LOGIN_PROTOCOL || "http";
var loginSecret = process.env.LOGIN_SECRET || "a2569f29-19a8-499f-88fa-adc45894ebf1";
var loginRealm = process.env.LOGIN_REALM || "master";
var loginClient = process.env.LOGIN_CLIENT || "fresh";

class Connect {  
  public token;
  public instance;
  constructor() {
    this.instance = axios.create({
        baseURL: protocol + '://' + loginService + ':' + loginPort + '/auth'
      });
  }

  
  public GetToken(user: string , password: string) {
    return new Promise((resolve, reject) => {
      var url = '/realms/' + loginRealm + '/protocol/openid-connect/token'
      var data = qs.stringify({
        grant_type: "password",
        username:user,
        password: password,
        client_secret:loginSecret,
        client_id:loginClient
      });
      this.instance.post(url, data, configrequest).then(response => {      
          this.token =  response.data.access_token;
          resolve(this.token);       
      }).catch(error => {
          reject(error);
      });
    });
  }
}

export = new Connect();

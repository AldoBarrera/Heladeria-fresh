import * as http from 'http';
import * as https from 'https';

const WSServer = require('socket.io');


import debug from 'debug';

import App from './App';
import { Global } from "./types/global";
import fs from 'fs';

class Index {

  // ref to Express instance
  public server;
  public port;

  constructor(){
  debug('ts-express:server');

  this.port = this.normalizePort(process.env.PORT || 3101);
  App.express.set('port', this.port);
  if(process.env.NODE_ENV == "production") {
    const options = {
      key: fs.readFileSync('./key.pem'),
      cert: fs.readFileSync('./cert.pem'),
      passphrase: 'Virtual2024?'
    };
    //openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
    this.server = https.createServer(options, App.express);
  } else {
    this.server = http.createServer(App.express);
  } 
  
  this.server.listen(this.port);
  this.server.on('error', this.onError.bind(this));
  this.server.on('listening', this.onListening.bind(this));
  
  //Configure Socket IO
  const io = new WSServer( this.server );
  App.addSocketIO(io);
  Global.io = io;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

public normalizePort(val: number|string): number|string|boolean {
  let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

public onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') throw error;
  let bind = (typeof this.port === 'string') ? 'Pipe ' + this.port : 'Port ' + this.port;
  switch(error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

public onListening(): void {
  let addr = this.server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
  debug(`Listening on ${bind}`);
}

}

export default  new Index();
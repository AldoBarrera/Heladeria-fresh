import { KeycloakConfig } from 'keycloak-angular';

let Credentials = {
  secret: "8484d5e2-b35a-494f-8a48-c1f73c93421b"
};

let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'master',
  clientId: 'heladeria',
  credentials: Credentials
};

let appConfig = {
  url: 'http://5661-2803-9400-3-1131-1d7-2877-2432-3798.ngrok.io'
};

export const environment = {
  production: false,
  keycloak: keycloakConfig,
  appConfig: appConfig
};



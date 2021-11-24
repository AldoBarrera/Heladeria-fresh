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
  url: 'http://localhost:3101'
};

export const environment = {
  production: false,
  keycloak: keycloakConfig,
  appConfig: appConfig
};



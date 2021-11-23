import { KeycloakConfig } from 'keycloak-angular';

let Credentials = {
  secret: "f06b6d53-2dee-4efe-b256-3076de7cbe5d"
};

let keycloakConfig: KeycloakConfig = {
  url: 'http://192.168.56.1:8080/auth',
  realm: 'stack-production-realm',
  clientId: 'stack-production',
  credentials: Credentials
};

let appConfig = {
  url: 'http://10.0.2.15:3000'
};

export const environment = {
  production: false,
  keycloak: keycloakConfig,
  appConfig: appConfig
};


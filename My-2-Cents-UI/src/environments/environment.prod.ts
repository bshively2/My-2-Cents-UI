import authInfo from '../../auth_config.json';

export const environment = {
  production: true,
  auth: {
    domain: authInfo.domain,
    URLBase: 'https://my2centsapi.azurewebsites.net/api/',
    clientId: authInfo.clientId,
    redirectUri: window.location.origin,
  },
};

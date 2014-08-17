/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    ///'simple-auth': {
    ///  authorizer: 'simple-auth-authorizer:oauth2-bearer',
    //  serverTokenRevokationEndpoint: "http://127.0.0.1/votes",
    //  refreshAccessTokens: true,
    //  clientId: "542207352831-3gkq637ef90nqugt7lael5888cmaiip0.apps.googleusercontent.com",
    //  authBaseUri: "http://127.0.0.1",
    //  redirectUri: "http://127.0.0.1/votes"
    //},
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },


    APP: {

      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // LOG_MODULE_RESOLVER is needed for pre-1.6.0
    ENV.LOG_MODULE_RESOLVER = true;

    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_MODULE_RESOLVER = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'production') {
  }



  return ENV;
};

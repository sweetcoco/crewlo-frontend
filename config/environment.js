/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'crewlo-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
  },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.EmberENV.baseURL = "http://Coreys-MacBook-Pro.local:3000/";
    ENV.baseURL = 'http://Coreys-MacBook-Pro.local:3000/';
    ENV.rootURL = 'http://Coreys-MacBook-Pro.local:3000/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
      ENV.EmberENV.baseURL = "http://crewlo-dev.elasticbeanstalk.com/";
      ENV.baseURL = 'http://crewlo-dev.elasticbeanstalk.com/';
      ENV.rootURL = 'http://crewlo-dev.elasticbeanstalk.com/';
  }

  return ENV;
};

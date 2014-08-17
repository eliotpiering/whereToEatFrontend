/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var fileMover = require('broccoli-file-mover');

  var vendorTree = fileMover('vendor', {
    files: {
      'ember-dev/index.js': 'ember/ember.js',
      'ember-prod/index.js': 'ember/ember.prod.js'
   }
});

var app = new EmberApp({
  name: require('./package.json').name,

  trees: {
    vendor: vendorTree
  }
});

app.import("vendor/handlebars/handlebars.js");


//app.import('vendor/ember-data-sails-adapter/ember-data-sails-adapter.js')
// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();

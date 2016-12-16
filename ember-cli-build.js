/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

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

  // ------------------ IMPORTS CSS ---------------------- //
  app.import("bower_components/template/css/bootstrap.css");
  app.import("bower_components/template/css/style.css");
  app.import("bower_components/template/css/prettyPhoto.css");
  app.import("bower_components/template/css/hoverex-all.css");
  app.import("bower_components/template/css/font-awesome.min.css");

  // ------------------ IMPORTS JS ---------------------- //
  app.import("bower_components/template/js/bootstrap.min.js");
  app.import("bower_components/template/js/custom.js");
  app.import("bower_components/template/js/jquery.hoverdir.js");
  app.import("bower_components/template/js/jquery.hoverex.min.js");
  app.import("bower_components/template/js/jquery.isotope.min.js");
  app.import("bower_components/template/js/jquery.prettyPhoto.js");
  app.import("bower_components/template/js/retina-1.1.0.js");

  return app.toTree();
};

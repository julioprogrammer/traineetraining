import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('about');
  this.resource('emberjs', function() {
    this.route('exemplos');
  });
  this.route('soapui');
  this.route('nativescript');
  this.route('yadda');
  this.route('instalacao');
  this.route('livros');
  this.route('comandos');
});

export default Router;

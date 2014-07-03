import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'where-do-we-eat', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'where-do-we-eat');

export default App;

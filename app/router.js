import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WhereDoWeEatENV.locationType
});

Router.map(function() {
    this.route("votes", {path: '/vote'});
    this.route("results", {path: "/results"});
    this.route('restaurant');
    this.route('update');
    this.route('finals');
  this.route('finals');
});

export default Router;

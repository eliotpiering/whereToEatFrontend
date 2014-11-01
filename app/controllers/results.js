import Ember from 'ember';

export default Ember.ArrayController.extend({
  content: [],
  sortProperties: ['votes'],
  sortAscending: false
});

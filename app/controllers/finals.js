import Ember from 'ember';
import Voteable from '../mixins/voteable';

export default Ember.ArrayController.extend(Voteable, {

  content: [],
  sortProperties: ['votes'],
  sortAscending: false,
  votesAllowed: 1

});

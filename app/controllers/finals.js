import Ember from 'ember';
import Voteable from '../mixins/voteable';

export default Ember.ArrayController.extend(Voteable, {
  votesAllowed: 2

});

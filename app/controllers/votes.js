import Ember from 'ember';
import Voteable from '../mixins/voteable';

export default Ember.ArrayController.extend(Voteable, {
    sortProperties: ['votes'],
    sortAscending: false,
    votesAllowed: 3
});

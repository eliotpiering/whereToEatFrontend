import Ember from 'ember';
import VoteableMixin from 'where-do-we-eat/mixins/voteable';

module('VoteableMixin');

// Replace this with your real tests.
test('it works', function() {
  var VoteableObject = Ember.Object.extend(VoteableMixin);
  var subject = VoteableObject.create();
  ok(subject);
});

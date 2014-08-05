import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  corsWithCredentials: true,
  host: 'http://safe-temple-8585.herokuapp.com'
});

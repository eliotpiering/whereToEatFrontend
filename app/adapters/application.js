import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  corsWithCredentials: true,
  //host: 'http://serene-woodland-4761.herokuapp.com'
  host: 'http://localhost:1337'
});

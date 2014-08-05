import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  corsWithCredentials: true,
  host: 'http://192.168.200.198:1337'
});
import DS from 'ember-data';
import SailsSocketAdapter from './ember-data-sails-adapter-fork';

export default DS.SailsSocketAdapter.extend({
  corsWithCredentials: true,
  //host: 'http://serene-woodland-4761.herokuapp.com'
  host: 'http://localhost:1337'
});

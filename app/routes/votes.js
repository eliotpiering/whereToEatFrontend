import Ember from 'ember';

export default Ember.Route.extend( {
    model: function() {
        return this.get('store').findAll('restaurant');
    },

  setupController: function (controller, model) {
    controller.set('selectedList', []);
    controller.set('model', model.filterBy('visited', false));
  }
});

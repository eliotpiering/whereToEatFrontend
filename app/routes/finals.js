import Ember from 'ember';

export default Ember.Route.extend({

    model: function(){
        return this.get('store').find('final', 'final').then(function(final){
           return final.get('finalists');
        })
    },

   setupController: function (controller, model) {
     controller.set('selectedList', []);
     controller.set('model', model)
  }

});

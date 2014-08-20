import Ember from 'ember';

export default Ember.ArrayController.extend({
  content: [],
  sortProperties: ['votes'],
  sortAscending: false,

  actions: {
    clearVotes: function(){
      this.get('store').findAll('restaurant').then(function (restaurants) {
         restaurants.forEach(function(restaurant){
           restaurant.set('votes', 0);
           restaurant.save();
         });
      });
      return false;
    },

    beginFinals: function(){
      var finalists = this.get('arrngedContent').slice(0,2);
      this.transitionToRoute('finals', finalists);
    }
  }
});

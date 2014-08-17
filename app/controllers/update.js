import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {

    deleteRestaurant: function(restaurant){
      if (confirm("Are you sure you want to delete this restaurant from the database")){
        restaurant.deleteRecord();
        restaurant.save();
      }
      return false;
    },

    toggleVisited: function(restaurant){
      restaurant.toggleProperty('visited');
      restaurant.save();
      return false;
    }
  }

});

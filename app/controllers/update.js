import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {

    updateMenu: function(restaurant){
	restaurant.set('menu', restaurant.get('menu'));
	    restaurant.save();
	return false;
    },
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

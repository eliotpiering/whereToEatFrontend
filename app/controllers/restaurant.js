import Ember from 'ember';

export default Ember.ObjectController.extend({
  isCreatingNewRestaurant: false,
  newName: '',
  newMenu: '',

  actions: {
    createNewRestaurant: function() {
      var controller = this;
      this.get('model').setProperties({
        name: this.get('newName'),
        menu: this.get('newMenu'),
        visited: false,
        votes: 0
      }).save().then (function(){
        controller.set('newName', '');
        controller.set('newMenu', '');
        controller.transitionToRoute('votes');
      }, function(reject){
        console.log('Error ' + reject.message);
        }
      );
      return false;
    }
  }
});

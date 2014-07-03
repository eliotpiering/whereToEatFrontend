import Ember from 'ember';

export default Ember.ArrayController.extend({
    selectedList: [],

    actions: {
        vote: function() {
            var selectedList = this.get('selectedList');
            var controller = this;
            selectedList.forEach( function(item) {
              var id = item.get('itemId');
              controller.get('store').find('restaurant', id).then (function(restaurant) {
                  var votes = restaurant.get('votes');
                  restaurant.set('votes', votes+1);
                  restaurant.save();
              });
            });
           this.transitionToRoute('results');
        },
        checked: function(item) {
            var selectedList = this.get('selectedList');
            if (item.get('selected')) {
                if (selectedList.length < 3) {
                    selectedList.addObject(item);
                } else {
                    var oldItem = selectedList.shift();
                    oldItem.set('selected', false);
                    selectedList.addObject(item);
                }
            } else {
                selectedList.removeObject(item);
            }
            return false;
        }
    }

});

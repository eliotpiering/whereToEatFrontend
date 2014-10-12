import Ember from 'ember';

export default Ember.ObjectController.extend({
    needs: 'votes',
    isVoting: Em.computed('currentPath', function(){
      return this.get('currentPath') == 'votes';
    }),

    actions: {

        vote: function(){
          if (this.get('currentPath') == 'votes') {
              this.get('controllers.votes').send('vote');
          }
        }
    }
});

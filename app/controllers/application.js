import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['votes', 'finals'],

    setIsVoting: (function () {
        this.set('isVoting', (this.get('currentPath') === 'votes' || this.get('currentPath') === 'finals'));
    }).observes('currentPath'),

    isVoting: (function () {
        return (this.get('currentPath') === 'votes' || this.get('currentPath') === 'finals');
    }).property(),

    selectFinalists: function (canidates) {
        var votesArray = canidates.mapBy('votes').sort(function(a, b){return b-a});
        var tieBreaker = 0;
        var numberToSelect = null;
        votesArray.some(function(votes, index) {
            if (index === 2) {
                tieBreaker = votes
            }
            if (votes < tieBreaker) {
                numberToSelect = index;
                return true;
            }
        });
        numberToSelect = numberToSelect || 3;
        return canidates.sortBy('votes').slice(0 - numberToSelect);
    },

    actions: {

        vote: function () {
            switch (this.get('currentPath')) {
                case 'votes':
                    this.get('controllers.votes').send('vote');
                    break;
                case 'finals':
                    this.get('controllers.finals').send('vote');
                    break;
                default:
                    return false;
            }
        },
        clearVotes: function () {
            this.get('store').findAll('restaurant').then(function (restaurants) {
                restaurants.forEach(function (restaurant) {
                    restaurant.set('votes', 0);
                    restaurant.save();
                });
            });
            this.get('model').set('isFinals', false);
            this.get('model').save();
            return false;
        },
        beginFinals: function () {
           var controller = this;
           var finalModel = this.get('model');
           this.get('store').findAll('restaurant').then(function(canidates){
             finalModel.set('isFinals', true);
             finalModel.get('finalists').then(function (finalists) {
                 finalists.setObjects(controller.selectFinalists(canidates));
                 finalModel.save();
             });
           });
           return false;
        }
    }
});

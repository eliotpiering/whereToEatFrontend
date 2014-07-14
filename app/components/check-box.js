import Ember from 'ember';

export default Ember.Component.extend({
    selected: false,
    click: function () {
        this.toggleProperty('selected');
        this.sendAction('action', this);
    }

});
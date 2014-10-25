import DS from 'ember-data';

var Final =  DS.Model.extend({
    isFinals: DS.attr('boolean'),
    finalists: DS.hasMany('restaurant', {async: true})
});

export default Final;
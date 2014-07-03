import DS from 'ember-data';

var Restaurant =  DS.Model.extend({
    name: DS.attr('string'),
    menu: DS.attr('string'),
    votes: DS.attr('number'),
    visited: DS.attr('boolean')
});



Restaurant.reopenClass({
    FIXTURES: [
        { id: 1, name: 'McGurks', menu: 'http://www.mcgurks.com/?page_id=258', votes: 0, visited: true },
        { id: 2, name: 'Soulards', menu: '', votes: 0, visited: true },
        { id: 3, name: 'Laredos', menu: 'http://www.laredoonlafayettesquare.com/menu.htm', votes: 0, visited: true },
        { id: 3, name: 'Little Saigon Cafe (CWE)', menu: 'http://www.littlesaigoncafe.com/menu/lunch/', votes: 0, visited: true },
        { id: 5, name: 'Bogarts', menu: 'http://bogartssmokehouse.com/menu/', votes: 0, visited: false }]
});

export default Restaurant;
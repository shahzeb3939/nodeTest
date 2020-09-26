var events = require('events')
var util = require('util')

var Person = function(name){
    this.name = name;
}

var personOne = new Person('kudra')

util.inherits(Person, events.EventEmitter)

personOne.on('someEvent', ()=>{
    console.log('this was fired');
})

personOne.emit('someEvent');

// console.log(personOne)
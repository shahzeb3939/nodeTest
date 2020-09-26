var events = require('events')
var util = require('util')

var Person = function(name){
    this.name = name;
}
util.inherits(Person, events.EventEmitter)

var personOne = new Person('kudra')
var personTwo = new Person('yain')
var personThree = new Person('tofu')

persons = [personOne, personTwo, personThree]

persons.forEach((person)=>{
    person.on('speak', (mssg)=>{
        console.log(mssg)
    })
})

personOne.emit('speak', `${personOne.name}: How are you?`);
personTwo.emit('speak', `${personTwo.name}: I am fine`);
personThree.emit('speak', `${personThree.name}: Arry mujhe tu andar lo`);

// console.log(personOne)
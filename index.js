var events = require('events')

var myEmitter = new events.EventEmitter();

myEmitter.on('thisEvent', (first, second)=> {
    console.log('this event was being emitted');
    console.log(second);
    console.log(`${first} - this was the first argument btw`)
})

myEmitter.emit('thisEvent', 'how will it take this', 'no chance for this second one')
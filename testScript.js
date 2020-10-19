const EventEmitter = require('events')
const event = new EventEmitter();

event.on('ConsoleLogMessage', () => {
    console.log(`Event 'ConsoleLogMessage' was emitted`)
})

event.emit('ConsoleLogMessage')


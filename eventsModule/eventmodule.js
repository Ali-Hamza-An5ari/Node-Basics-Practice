const EventEmitter = require('events');
// EventEmitter class allows to create and handle custom events module

class MyEmitter extends EventEmitter {}

//emitters objects emit named events(seeTheBall) that cause Function objects ("listeners") to be called.
const myEmitter = new MyEmitter();

//callback to run on seeTheBall event

myEmitter.on('seeTheBall', () => {
  
    console.log('Ball reached the bat');

    //setTimeOut runs async and not block code
  setTimeout(() => {
        console.log("Hit and run")
  }, 2000);


});

myEmitter.emit('seeTheBall');
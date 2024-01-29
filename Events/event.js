//stetp - 1
const EventEmitter = require('node:events');
const myEmitter = new EventEmitter();
// step  - 2(event Registration);

// for this one we can use on or addListener method
myEmitter.addListener('myEvent', (data)=> {
   console.log('Event received with data: ', data);
});
//third step : event emission;
// for this we use emit;

myEmitter.emit('myEvent', {some : 'data'});
//once method
// The 'once' method is similar to 'on', but it registras
// a listener that will be called only once for a particular event.

myEmitter.once('oneTimeEvent', () => {
    console.log("this will be happen once");
});
myEmitter.emit('oneTimeEvent'); 

/**
 
 use case of once fire method: 
 1-> initialization or setup Events;
 2->one-Time Authentication
 3-> cleanup or teardown Operation
 */
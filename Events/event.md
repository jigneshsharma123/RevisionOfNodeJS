# Events in Node.js

1. Every action on a computer is an event. Like when a connection is made or a file is opened.

* Example : Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

# Events Module

1. Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

2. In addition, all event properties and methods are an instance of an EventEmitter object.

3. To be able to access these properties and methods, create an EventEmitter object:

<code>
var events = require('events');
var eventEmitter = new events.EventEmitter();</code>

# The EventEmitter Object : 

```
You can assign event handlers to your own events with the EventEmitter object.

In the example below we have created a function that will be executed when a "scream" event is fired.

To fire an event, use the emit() method.
```
<code>
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');</code>
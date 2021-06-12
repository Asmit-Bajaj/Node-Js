//creating the events

const EventEmitter = require("events");

const event = new EventEmitter();

//now defining an event

event.on("myEvent",(p1)=>{
    console.log("my event called " + p1);
});

//now call the event

event.emit("myEvent","hello world");

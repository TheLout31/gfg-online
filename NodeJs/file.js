const fs = require("fs");
const EventEmitter = require("events");
const emiter = new EventEmitter();

emiter.on("message logged", function () {
  console.log("logged");
});

emiter.emit("message logged");
// const files =fs.readdirSync('./')

// console.log(files)

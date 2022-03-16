const fs = require("fs");

const readable = fs.createReadStream("./files/classifications_test_file.json")


// Handling error event
readable.on("error", err => {
  console.log(err);
});

console.log("Done...");

/*
* run command
* node files/createReadStream.js
*/

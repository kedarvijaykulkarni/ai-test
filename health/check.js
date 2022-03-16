const mantiumAi = require('@mantium/mantiumapi');

mantiumAi.Health().check().then((response) => {
  console.log("*************** Health response ***************");
  console.log(response);
});


// node --trace-warnings health/check.js

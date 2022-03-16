const mantiumAi = require('@mantium/mantiumapi');

// mantiumAi.ORIGIN = 'https://api.staging.mantiumai.com';

(async () => {
  await mantiumAi.Auth().accessTokenLogin({
    username: 'kedman1234@gmail.com',
    password: 'Suvarna@12'
  })
    .then((response) => {
      // get bearer_id and set to default
      mantiumAi.api_key = response.data.attributes.bearer_id;
      // console.log(response);
      return response;
    });

  /*
  * API Key is set on above
  * mantiumAi.api_key=`key`
  * so we can call these method directly now
  */
  mantiumAi.Intelets().update({
    "id": "5407866a-0ad3-4671-b7e3-b5635bf521ea",
    "name":"Chang in intelet name",
    "description":"description for the intelet is changed",
    "prompts":[
      "c07449be-aae0-421c-a00d-72e1b6928ac4",
      "fb6a24b9-cd3c-4600-a58f-929ce6d5c044"
    ]}).then((response) => {
    console.log("*************** Intelet update ***************");
    console.log(response);
    console.log("*************** data ***************");
    console.log(response.data);
    console.log("*************** attributes ***************");
    console.log(response.data.attributes);
  });

})();

/*
* run command
* node intelets/update.js
*/

// node --trace-warnings intelets/update.js


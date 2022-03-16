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
  mantiumAi.Intelets().create({
    "name":"intelet name",
    "description":"description for the intelet",
    "prompts":[
      "41f62edf-9b0f-4397-8254-21dfc95e4efe",
      "23c217b8-1f87-4222-9e3c-e3bf4497c217"
    ]}).then((response) => {
    console.log("*************** Intelet Create ***************");
    console.log(response);
    console.log("*************** data ***************");
    console.log(response.data);
    console.log("*************** attributes ***************");
    console.log(response.data.attributes);
  });

})();

/*
* run command
* node intelets/create.js
*/

// node --trace-warnings intelets/create.js


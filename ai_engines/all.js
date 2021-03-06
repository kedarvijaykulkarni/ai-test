const mantiumAi = require('@mantium/mantiumapi');
// mantiumAi.ORIGIN = 'https://www.google.com';
// mantiumAi.API_VERSION = 'v5';

(async () => {
  const loginResponse = await mantiumAi.Auth().accessTokenLogin({
    username: 'kedman1234@gmail.com',
    password: 'Suvarna@12'
  })
    .then((response) => {
      // get bearer_id and set to default
      mantiumAi.api_key = response.data.attributes.bearer_id;
      return response;
    });
  console.log('********* Login ********');
  console.log(loginResponse);
  /*
  * API Key is set on above
  * mantiumAi.api_key=`key`
  * so we can call these method directly now
  */

  const methodResponse = await mantiumAi.AiEngines().all({ 'page': 1, 'size': 20 }).then((response) => {
    return response;
  });
  console.log('*********** Ai Methods *********');
  console.log(methodResponse.data);
  console.log('*********** List of all Ai Engines *********');
  for (let engine of methodResponse.data) {
    console.log("Name: ", engine.attributes.name);
  }

})();

/*
* run command
* node ai_engines/all.js
*/

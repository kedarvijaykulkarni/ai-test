const mantiumAi = require('mantiumclient-js');

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

  const methodResponse = await mantiumAi.AiMethods('openai').list({ 'page': 1, 'size': 20 }).then((response) => {
    return response;
  });
  console.log('*********** Ai Methods *********');
  console.log(methodResponse.data);
  // console.log(methodResponse.data[0].attributes.ai_provider);
  // console.log(methodResponse.data[0].attributes.ai_engines);

})();

/*
* run command
* node ai_methods/methods.js
*/

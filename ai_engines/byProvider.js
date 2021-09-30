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
  const providers = ["openai",
    "cohere",
    "mantium",
    "OpenAI",
    "Cohere",
    "Mantium"];

  console.log('*********** List all of the AI Engines for a specific AI Provider *********');

  for (let provider of providers) {
    console.log(`*********** getting details for ${provider} *********`);
    const methodResponse = await mantiumAi.AiEngines(provider).byProvider({ 'page': 1, 'size': 20 }).then((response) => {
      return response;
    });
    console.log(`*********** Response for ${provider} ***********`);
    console.log(methodResponse.data);
    console.log("*********** end ***********\n\n");
  }

})();

/*
* run command
* node ai_engines/byProvider.js
*/

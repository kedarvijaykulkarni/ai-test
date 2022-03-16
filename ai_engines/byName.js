const mantiumAi = require('@mantium/mantiumapi');

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
  const engines = ["davinci",
    "curie",
    "babbage",
    "ada",
    "content-filter-alpha-c4",
    "content-filter-dev",
    "curie-instruct-beta",
    "cursing-filter-v6",
    "davinci-instruct-beta",
    "baseline-shrimp",
    "baseline-otter",
    "baseline-seal",
    "baseline-shark",
    "baseline-orca",
    "iron",
    "j1-large",
    "j1-jumbo"];

  console.log('*********** Get the details for a specific AI Engine *********');

  for (let engine of engines) {
    console.log(`*********** getting details for ${engine} *********`);
    const methodResponse = await mantiumAi.AiEngines(engine).byName().then((response) => {
      return response;
    });
    console.log(`*********** Response for ${engine} ***********`);
    console.log(methodResponse);
    console.log("*********** end ***********\n\n");
  }

})();

/*
* run command
* node ai_engines/byName.js
*/

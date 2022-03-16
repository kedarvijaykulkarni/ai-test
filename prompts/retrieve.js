

const mantiumAi = require('@mantium/mantiumapi');

(async () => {
  await mantiumAi.Auth().accessTokenLogin({
    username: 'kedman1234@gmail.com',
    password: 'Suvarna@12'
  })
    .then((response) => {
      // get bearer_id and set to default
      mantiumAi.api_key = response.data.attributes.bearer_id;
      return response;
    });

  /*
  * API Key is set on above
  * mantiumAi.api_key=`key`
  * so we can call these method directly now
  */
  await mantiumAi.Prompts()
    .retrieveId('b1c01f1a-ff6c-45e8-8378-d23d11d7de9c')
    .then((response) => {

      console.log("*************** retrieve ***************");
      console.log(response);

      console.log("*************** data ***************");
      console.log(response.data);

      console.log("*************** attributes ***************");
      console.log(response.data.attributes);

      console.log("*************** relationships ***************");
      console.log(response.data.relationships);

      console.log("*************** included ***************");
      console.log(response.included);
    });
})();

/*
* run command
* node prompts/retrieve.js
*/

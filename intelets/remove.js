

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
  await mantiumAi.Intelets()
    .remove('2bddef3e-f4d9-400c-b2db-4ed2a52c6b83')
    .then((response) => {
      console.log("*************** Remove ***************");
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
* node intelets/remove.js
*/

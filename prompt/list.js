const mantiumAi = require('mantiumclient-js');

(async () => {
  await mantiumAi.Auth().accessTokenLogin({
    username: 'kedman1234@gmail.com',
    password: 'Suvarna@12'
  })
    .then((response) => {
      // get bearer_id and set to default
      mantiumAi.api_key = response.data.attributes.bearer_id;
      console.log(response);

      return response;
    });

  /*
  * API Key is set on above 
  * mantiumAi.api_key=`key`
  * so we can call these method directly now
  */
  await mantiumAi.Prompts().list({ 'page': 1, 'size': 20, 'show_public_shareable': false }).then((response) => {
    console.log('*********** List *********');
    console.log(response.data);
  });
})();

/*
* run command
* node prompt/list.js
*/

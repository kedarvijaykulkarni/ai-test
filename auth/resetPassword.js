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
  const loginResetResponse = await mantiumAi.Auth().resetPassword({
    email: 'kedman1234@gmail.com'
  }).then((response) => {
    return response;
  });
  console.log('*********** resetPassword *********');
  console.log(loginResetResponse);

})();

/*
* run command
* node auth/resetPassword.js
*/

const mantiumAi = require('@mantium/mantiumapi');

// Correct way to do this

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
  const logoutResponse = await mantiumAi.Auth().revokeToken().then((response) => {
    return response;
  });
  console.log('*********** logout *********');
  console.log(logoutResponse);

})();

/*
* run command
* node auth/logout.js
*/

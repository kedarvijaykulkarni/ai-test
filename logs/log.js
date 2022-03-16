const mantiumAi = require('@mantium/mantiumapi');

mantiumAi.ORIGIN = 'https://api.staging.mantiumai.com';

(async () => {
  await mantiumAi.Auth().accessTokenLogin({
    username: 'kedman1234@gmail.com',
    password: 'Suvarna@12'
  })
    .then((response) => {
      // get bearer_id and set to default
      mantiumAi.api_key = response.data.attributes.bearer_id;
    });

  /*
  * API Key is set on above
  * mantiumAi.api_key=`key`
  * so we can call these method directly now
  */

  let log_id = undefined;

  await mantiumAi.Logs().list({ 'page': 1, 'size': 2 }).then((response) => {
    console.log('*********** Tag list *********');
    console.log(response);
    console.log('*******************************');
    console.log(response.data);
    console.log('###############################');
    log_id = response.data[0].id;
  });

  await mantiumAi.Logs().retrieve(log_id).then((response) => {
    console.log('*********** Tag retrieve *********');
    console.log(response);
    console.log('*******************************');
    console.log(response.data);
    console.log('###############################');
  });

  await mantiumAi.Logs().retrieveId(log_id).then((response) => {
    console.log('*********** Tag retrieve by id *********');
    console.log(response);
    console.log('*******************************');
    console.log(response.data);
    console.log('###############################');
  });

})();

/*
* run command
* node logs/log.js
*/

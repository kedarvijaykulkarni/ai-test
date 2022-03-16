

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

  let intelet_id = 'da98c9fc-c139-4136-a6e9-286bca5cc397';
  let input = 'What is the meaning of life?';

  await mantiumAi.Intelets()
    .execute({
      id: intelet_id,
      input
    })
    .then(async (res) => {
      console.log("*************** Execute ***************");
      console.log(res);
      if(res?.intelet_execution_id) {
        await mantiumAi.Intelets().result(res.intelet_execution_id)
        .then((response) => {
          console.log("*************** Execute Result ***************");
          console.log(response);
        });
      }
    });
})();

/*
* run command
* node intelets/execute.js
*/

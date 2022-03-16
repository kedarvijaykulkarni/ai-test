

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

  let prompt_id = 'b1c01f1a-ff6c-45e8-8378-d23d11d7de9c';
  let input = 'This is my second test execute prompt';

  await mantiumAi.Prompts('OpenAI')
    .execute({
      id: prompt_id,
      input
    })
    .then(async (res) => {
      console.log("*************** Execute ***************");
      console.log(res);
      if(res?.prompt_execution_id) {
        await mantiumAi.Prompts('OpenAI').result(res.prompt_execution_id)
        .then((response) => {
          console.log("*************** Execute Result ***************");
          console.log(response);
        });
      }
    });
})();

/*
* run command
* node prompts/execute.js
*/

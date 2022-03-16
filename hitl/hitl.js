const mantiumAi = require('@mantium/mantiumapi');

// mantiumAi.ORIGIN = 'https://api.staging.mantiumai.com';
// mantiumAi.ORIGIN = 'https://new-api.staging.mantiumai.com';

(async () => {
  await mantiumAi
    .Auth()
    .accessTokenLogin({
      username: 'kedman1234@gmail.com',
      password: 'Suvarna@12',
    })
    .then((response) => {
      // get bearer_id and set to default
      mantiumAi.api_key = response.data.attributes.bearer_id;
    });

  await mantiumAi
    .HITL()
    .list({ page: 1, size: 2 })
    .then((response) => {
      console.log('*********** HITL list response *********');
      console.log(response);
    });

  // await mantiumAi
  //   .HITL()
  //   .accept('7c18c7d1-d375-4410-a4a5-fa20c49f1f61')
  //   .then((response) => {
  //     console.log('*********** HITL accept response *********');
  //     console.log(response);
  //   });

  // await mantiumAi
  //   .HITL()
  //   .reject('f3491fbc-cd23-4e0b-9416-253eb34da9a3')
  //   .then((response) => {
  //     console.log('*********** HITL accept response *********');
  //     console.log(response);
  //   });

  // await mantiumAi
  //   .HITL()
  //   .modifyOutput({
  //     id: '0189cd42-ec69-4e4c-9fe7-f2445844125d',
  //     new_output: 'The black book is on left',
  //   })
  //   .then((response) => {
  //     console.log('*********** HITL accept response *********');
  //     console.log(response);
  //   });

  await mantiumAi
    .HITL()
    .modifyInput({
      id: '5e0beb8d-e4b4-4ad5-95e6-cd371981fe83',
      new_input: 'Le',
    })
    .then((response) => {
      console.log('*********** HITL accept response *********');
      console.log(response);
    });

  await mantiumAi
    .HITL()
    .list({ page: 1, size: 2 })
    .then((response) => {
      console.log('*********** HITL list response *********');
      console.log(response);
    });
})();

/*
 * run command
 * node hitl/hitl.js
 */

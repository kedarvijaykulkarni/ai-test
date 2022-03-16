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

  /*
   * API Key is set on above
   * mantiumAi.api_key=`key`
   * so we can call these method directly now
   */

  await mantiumAi
    .Security()
    .listPolicies({ page: 1, size: 2 })
    .then((response) => {
      console.log('*********** listpolicies response *********');
      console.log(response);
      console.log(response.data[0]);
      console.log(response.data[1]);
    });

  await mantiumAi
    .Security()
    .policy('39a17204-aa6c-46c7-ae0c-fe664f6397b0')
    .then((response) => {
      console.log('*********** retrievePolicy response *********');
      console.log(response);
      console.log(response.data);
    });

  await mantiumAi
    .Security()
    .policyId('39a17204-aa6c-46c7-ae0c-fe664f6397b0')
    .then((response) => {
      console.log('*********** retrievePolicy response *********');
      console.log(response);
      console.log(response.data);
    });

  await mantiumAi
    .Security()
    .listRules({ page: 1, size: 2 })
    .then((response) => {
      console.log('*********** listRules response *********');
      console.log(response);
    });

  await mantiumAi
    .Security()
    .rule('0a3e489e-aa59-634b-82bf-c2f81dd67608')
    .then((response) => {
      console.log('*********** rule response *********');
      console.log(response);
    });

  await mantiumAi
    .Security()
    .ruleId('0a3e489e-aa59-634b-82bf-c2f81dd67608')
    .then((response) => {
      console.log('*********** ruleId response *********');
      console.log(response);
    });

  await mantiumAi
    .Security()
    .listActionTypes({ page: 1, size: 2 })
    .then((response) => {
      console.log('*********** listActionTypes response *********');
      console.log(response);
      console.log(response.data);
    });

  await mantiumAi
    .Security()
    .actionType('1e378559-7015-4271-a3f1-abcd2c663c40')
    .then((response) => {
      console.log('*********** actionType response *********');
      console.log(response);
    });

  await mantiumAi
    .Security()
    .actionTypeId('1e378559-7015-4271-a3f1-abcd2c663c40')
    .then((response) => {
      console.log('*********** actionTypeId response *********');
      console.log(response);
    });

  await mantiumAi
    .Security()
    .createPolicy({
      name: 'must be policyname new',
      description: '',
      rules: [
        {
          rule_id: '8bc66446-c72d-4627-a3f4-cf942383cee5',
          parameters: {
            max_input_characters: '2',
            scope: 'per_prompt',
          },
        },
      ],
      actions: [
        {
          action_type_id: '1e378559-7015-4271-a3f1-abcd2c663c40',
        },
        {
          action_type_id: 'a49e30e3-da97-49a1-b501-7840358825ba',
        },
        {
          action_type_id: '72d64ca0-35bf-4646-9782-90634d7b6b97',
        },
      ],
      notifications: [],
    })
    .then((response) => {
      console.log('*********** policy create *********');
      console.log(response);
      console.log(response.data[0].attributes);
      console.log(response.data[0].relationships);
    });

  await mantiumAi
    .Security()
    .updatePolicy({
      id: '73067dc6-44dd-472d-a82b-44e0c3a1ea0a',
      name: 'must be policyname new via update',
      description: 'updated descriptions naav change',
      rules: [
        {
          rule_id: '8bc66446-c72d-4627-a3f4-cf942383cee5',
          parameters: {
            max_input_characters: '2',
            scope: 'per_prompt',
          },
        },
      ],
      actions: [
        {
          action_type_id: '1e378559-7015-4271-a3f1-abcd2c663c40',
        },
        {
          action_type_id: 'a49e30e3-da97-49a1-b501-7840358825ba',
        },
        {
          action_type_id: '72d64ca0-35bf-4646-9782-90634d7b6b97',
        },
      ],
      notifications: [],
    })
    .then((response) => {
      console.log('*********** policy update *********');
      console.log(response);
      console.log(response.data[0].attributes);
      console.log(response.data[0].relationships);
    });

  await mantiumAi
    .Security()
    .removePolicy('fbf3383d-4349-425e-84ec-e6831318f08b')
    .then((response) => {
      console.log('*********** removePolicy *********');
      console.log(response);
    });
})();

/*
 * run command
 * node security/listpolicies.js
 */

// https://api.mantiumai.com/v1/files/aws/signature
// https://api.mantiumai.com/v1/files/aws/signature

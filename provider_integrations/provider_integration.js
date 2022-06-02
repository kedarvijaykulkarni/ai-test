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
    .ProviderIntegrations()
    .list({ page: 1, size: 2 })
    .then((response) => {
      console.log('*********** Provider Integrations list response *********');
      console.log(response);
      console.log(response.data);
      console.log(response.data[0].attributes);
      console.log(response.data[1].attributes);
    });

  await mantiumAi
    .ProviderIntegrations('cohere')
    .verifyKey({ api_key: 'S22LjXeh6vZSQQ24rqsiL4mxQA5sHooqjHIsYPAm' })
    .then((response) => {
      console.log('*********** Provider Integrations Verify Key response *********');
      console.log(response);
    });

  // { api_key: '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', verified: false }

  await mantiumAi
  .ProviderIntegrations('openai')
  .removeKey()
  .then((response) => {
    console.log('*********** Provider Integrations Remove Key response *********');
    console.log(response);
  });

  await mantiumAi
    .ProviderIntegrations('openai')
    .saveKey({ api_key: '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', verified: false })
    .then((response) => {
      console.log('*********** Provider Integrations Verify Key response *********');
      console.log(response);
      console.log(response.data.attributes);
    });

})();

/*
 * run command
 * node provider_integrations/provider_integration.js
 */

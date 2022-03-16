const mantiumAi = require('@mantium/mantiumapi');

(async () => {
  await mantiumAi.Auth().accessTokenLogin({
    username: 'kedman1234@gmail.com',
    password: 'Suvarna@12'
  })
    .then((response) => {
      // get bearer_id and set to default
      mantiumAi.api_key = response.data.attributes.bearer_id;
      // console.log(response);
      return response;
    });

  /*
  * API Key is set on above
  * mantiumAi.api_key=`key`
  * so we can call these method directly now
  */
  mantiumAi.Prompts('OpenAI').update({
    "id": "c07449be-aae0-421c-a00d-72e1b6928ac4",
    "name": "update the Prompt",
    "intelets": [],
    "policies": [],
    "tags": ["383fb5e6-6c30-4641-9850-efeb3cdd77b8"],
    "status": "ACTIVE",
    "description": "Basic Prompt Description",
    "prompt_text": "Endpoint Settings: Prompt Line",
    "ai_method": "completion",
    "default_engine": "ada",
    "prompt_parameters": {
      "basic_settings": {
        "temperature": "1",
        "max_tokens": "512",
        "frequency_penalty": "1",
        "presence_penalty": "1",
        "top_p": "1",
        "stop_seq": ["Basic Settings: Stop Sequence"]
      },
      "advanced_settings": {
        "best_of": "5",
        "n": "2",
        "logprobs": "10",
        "echo": true,
        "stream": true,
        "logit_bias": []
      }
    }
  }).then((response) => {
    console.log("*************** Update Create ***************");
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


/**
 * node --trace-warnings prompts/update.js
 */

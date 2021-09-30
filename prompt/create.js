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
  let res = await mantiumAi.Prompts('OpenAI').create({
    "name": "JavaScript create Prompt",
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
        "temperature": "ked",
        "max_tokens": "512",
        "frequency_penalty": "1",
        "presence_penalty": "1",
        "top_p": "1",
        "stop_seq": ["Basic Settings: Stop Sequence"]
      },
      "advanced_settings": {
        "best_of": "5",
        "n": "10",
        "logprobs": "10",
        "echo": true,
        "stream": true,
        "logit_bias": []
      }
    }
  })
  // .then((response) => {
  //   console.log('*********** Create *********');
  //   console.log(response.data);
  //   console.log(response);
  // });
  console.log(res);
})();

/*
* run command
* node prompt/create.js
*/



// const prompt = {
//   name: '', // Tweet Classification
//   description: '', // This prompt classifies the tweet into categories
//   deploy_scope: '', // NEED TO FIND (PromptDeployScope.ORGANIZATION_ONLY)
//   adults_only: false, // NEED TO FIND
//   prompt_text: '', // The following is a list of companies and the categories they fall into\n\nFacebook: Social media, Technology\nLinkedIn: Social media, Technology, Enterprise, Careers\nUber: Transportation, Technology, Marketplace\nUnilever: Conglomerate, Consumer Goods\nMcdonalds: Food, Fast Food, Logistics, Restaurants\nFedEx:
//   ai_method: '', // completion
//   ai_provider: '', // OpenAI
//   default_engine: '', // babbage
//   status: '', //PromptStatus.ACTIVE
//   ai_provider_approved: false


// }

// console.log('prompt ', prompt)


// const prompt = {
//   name: '',
//   description: '',

//   prompt_text: '',

// }
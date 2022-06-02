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
      // console.log(response);
      return response;
    });

  /*
  * API Key is set on above
  * mantiumAi.api_key=`key`
  * so we can call these method directly now
  */
  mantiumAi.Prompts('OpenAI').create({
    ai_engine_id: "ce6850ef-bc78-4f7a-af5f-81fb9d9fb872",
    name: "Test prompt name",
    intelets: [],
    policies: [],
    tags: [],
    ai_provider: "OpenAI",
    status: "ACTIVE",
    description: "Some description about test prompt",
    prompt_text: "Just checking the Prompt line",
    ai_method: "completion",
    default_engine: "ada",
    prompt_parameters: {
      basic_settings: {
        temperature: 1,
        max_tokens: 1024,
        frequency_penalty: 1,
        presence_penalty: 1,
        top_p: 1,
        stop_seq: []
      },
      advanced_settings: {
        best_of: 10,
        n: 2,
        logprobs: 10,
        echo: false,
        stream: false,
        logit_bias: []
      }
    }
  }).then((response) => {
    console.log("*************** Prompt Create ***************");
    console.log(response);
  });

})();

/*
* run command
* node prompts/create.js
*/

// node --trace-warnings prompt/create.js

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


/*

{
 "name": "Tweet Classification",
 "description": "This prompt classifies the tweet into categories",
 "prompt_text": "The following is a list of companies and the categories they fall into\n\nFacebook: Social media, Technology\nLinkedIn: Social media, Technology, Enterprise, Careers\nUber: Transportation, Technology, Marketplace\nUnilever: Conglomerate, Consumer Goods\nMcdonalds: Food, Fast Food, Logistics, Restaurants\nFedEx:",
 "ai_method": "classifications",
 "ai_provider": "OpenAI",
 "default_engine": "babbage",
 "status": "ACTIVE",
 "deploy_name": "Meme Generator",
 "deploy_description": "This is my simple meme generator built on Mantium",
 "deploy_placeholder": "Meme generator",
 "deploy_author_name": "Michael Iron",
 "deploy_author_contact": "example@mantium.com",
 "deploy_type": "PROMPT",
 "deploy_allow_input": false,
 "intelets": [
 ],
 "tags": [
 ],
 "prompt_parameters": {
   "basic_settings": {
     "expand":["completion", "file"],
     "logprobs": 1,
     "temperature": 1,
     "max_examples": 1,
     "return_prompt": false,
     "return_metadata": false,
     "labels":["Positive", "Negative", "Neutral"],
     "logit_bias": [{"token": 20123, "bias": -100}]
   },
   "endpoint_settings": {
     "model": "curie",
     "search_model": "ada",
     "request_body": {
       "query": "I am just searching",
       "examples": [
         {
           "name": "The movie is so interesting.",
           "value": "Positive"
         },
         {
           "name": "It is quite boring.",
           "value": "Negative"
         }
       ]
     },
     "request_body_type": "Query"
   }
 }
}

*/

const mantiumAi = require('@mantium/mantiumapi');

mantiumAi.api_key = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlpLVEEzaDh4U1Y4MDBJTG5UMWlXaSJ9.eyJuaWNrbmFtZSI6ImtlZG1hbjEyMzQiLCJuYW1lIjoia2VkbWFuMTIzNEBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvM2Q1NjIwMGE4ZTgyNTZmNDBmNWUxMjdkMTcyZmM4ODU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZrZS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMC0wOVQxMTo1ODowNy42ODNaIiwiZW1haWwiOiJrZWRtYW4xMjM0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL3Byb2QtbWFudGl1bS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjE1MmE1NjY4NjFlMTMwMDY5MzQxN2IzIiwiYXVkIjoiUFZaRHVoN0FkWnV1Y01tdnVQN1RLOGY1bVE2bGNuODgiLCJpYXQiOjE2MzM3ODA2ODcsImV4cCI6MTYzMzgxNjY4N30.jhgUvbknyEYTBgIog3GcImgT8qTt5yDUfHIZECS73zZbJBPGrXraQrUQYD-lMiqdae2Hnco99CipcLkvRkJmX9leCku_X80Cbk9ySeiGtWgFg2s0IYHUPPqRuXf4hKAAuXH7fR03Nza4CpRihqFC87vPkYBeWyF71YxVBoLtyKR0DKl_oLpMB8eW7xLFkNWq91xNchQCfINAUvi4Q7LucDJCVZMrse2cGNK4uRBE7bkM6kiVTrxUcZ7zh0ThdSsaEu8MYXb_qhaOmzqjtmFxqI91qsW7Cj8z1OgONpH_dIJQz-T7U2uZQ9tE5TGrI9oS2oQ-pozYOUpru3LOE7xoIw";

mantiumAi.Prompts('OpenAI').create({
  "name": "create the Prompt",
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
      "n": "10",
      "logprobs": "10",
      "echo": true,
      "stream": true,
      "logit_bias": []
    }
  }
}).then((response) => {
  console.log("*************** Output ***************");
  console.log(response);
});

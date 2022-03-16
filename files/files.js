const mantiumAi = require('@mantium/mantiumapi');
const fs = require('fs');

mantiumAi.ORIGIN = 'https://api.staging.mantiumai.com';

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
    .Files()
    .upload({
      purpose: 'Classifications',
      key: fs.createReadStream('./files/classifications_test_file.json'),
      upload_source: 'OPENAI-FILE-UPLOAD',
      fine_tune_file_type: '',
    })
    .then((response) => {
      // save this tag id to edit the same tag
      // file_id = response.data.id;
      console.log('*********** Upload response *********');
      console.log(response);

      if (response.detail) {
        console.log(response.detail);
        console.log(response.detail.loc);
      }
    });

  // let file_id = 'file-lD7g3egNlil5yyg1RaAkQlmW';

  // await mantiumAi
  //   .Files()
  //   .remove(file_id)
  //   .then((response) => {
  //     console.log('*********** Remove response *********');
  //     console.log(response);
  //   });


    /*
  // { 'file_type': 'FILES_ONLY' }
  // { 'file_type': 'ALL' }
  // { 'file_type': 'FINETUNE_ONLY' }

  await mantiumAi
    .Files()
    .list({ file_type: 'FILES_ONLY' })
    .then((response) => {
      console.log('*********** File list *********');
      console.log(response);

      console.log('*********** File attributes files *********');
      console.log(response.data.attributes.files);

      if (response.detail) {
        console.log(response.detail);
        console.log(response.detail.loc);
      }
    });

    */
})();

/*
 * run command
 * node files/files.js
 */

// https://api.mantiumai.com/v1/files/aws/signature
// https://api.mantiumai.com/v1/files/aws/signature

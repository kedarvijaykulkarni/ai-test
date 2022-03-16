console.log('Silence is golden...');

const mantiumAi = require('@mantium/mantiumapi');

(async () => {
  await mantiumAi.Auth().accessTokenLogin({
    username: 'kedman1234@gmail.com',
    password: 'Suvarna@12'
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
  await mantiumAi.Tags().remove('4375777d-d111-472c-8d0c-a75b519c8539').then((response) => {
    // save this tag id to edit the same tag
    tag_id = response.data.attributes.tag_id;
    console.log('*********** Tag remove *********');
    console.log(response);
  });
})();

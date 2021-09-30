const mantiumAi = require('mantiumclient-js');

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

  let tag_id = undefined;

  await mantiumAi.Tags().create({
    name: 'tag name 1',
    description: 'Some description'
  }).then((response) => {
    // save this tag id to edit the same tag
    tag_id = response.data.attributes.tag_id;
    console.log('*********** Tag create *********');
    console.log(response);
  });

  await mantiumAi.Tags().retreive(tag_id).then((response) => {
    console.log('*********** Tag Retreive *********');
    console.log(response.data);
  });

  await mantiumAi.Tags().retreiveId(tag_id).then((response) => {
    console.log('*********** Tag Retreive by id *********');
    console.log(response.data);
  });

  await mantiumAi.Tags().update({
    id: tag_id,
    name: 'New tag name',
    description: 'Some long description'
  }).then((response) => {
    // save this tag id to edit the same tag
    tag_id = response.data.attributes.tag_id;
    console.log('*********** Tag updated *********');
    console.log(response);
  });

  await mantiumAi.Tags().list({ 'page': 1, 'size': 20 }).then((response) => {
    console.log('*********** Tag list *********');
    console.log(response.data);
  });

  await mantiumAi.Tags().remove(tag_id).then((response) => {
    // save this tag id to edit the same tag
    tag_id = response.data.attributes.tag_id;
    console.log('*********** Tag remove *********');
    console.log(response);
  });

  await mantiumAi.Tags().list({ 'page': 1, 'size': 20 }).then((response) => {
    console.log('*********** Tag list *********');
    console.log(response.data);
  });


})();

/*
* run command
* node tags/tag.js
*/

const fetch       = require('node-fetch');
const Getty    = {};
const APP_ID      = process.env.APP_ID;

Getty.getRandomPhoto = () => {
  return fetch("Api-Key:xzk94bhpsu6t2t7f7hp4wauw" `https://api.gettyimages.com/v3/search/images/editorial?phrase=yoga`);
};

module.exports = Getty;

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    let breedInfo = data[0];
    if (breedInfo) {
      callback(null, data[0].description);
    } else {
      callback(error, null);
    }
  });
};

module.exports = {fetchBreedDescription};
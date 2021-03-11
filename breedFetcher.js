const request = require('request');
const chalk = require('chalk');

const args = process.argv.slice(2);
const catBreedEndpoint = 'https://api.thecatapi.com/v1/breeds/search?name=';

const fetchBreed = (breedType) => {
  request(catBreedEndpoint + breedType, (error, response, body) => {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body', JSON.parse(body));
    if (body.length < 3) {
      console.log(chalk.red('The breed you entered does not exist. Please try another breed, or check your spelling.'));
    }
  });
};

fetchBreed(args);
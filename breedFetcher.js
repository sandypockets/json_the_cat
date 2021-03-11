const request = require('request');
const chalk = require('chalk');

const args = process.argv.slice(2);
const catBreedEndpoint = 'https://api.thecatapi.com/v1/breeds/search?name=';

const fetchBreed = (breedType) => {
  request(catBreedEndpoint + breedType, (error, response, body) => {
    if (error) {
      console.log(chalk.bgRed('The request could not be completed. Check the URL.'));
    } else {
      console.error('error:', error);
      console.log('statusCode:', response.statusCode);
      console.log('body', JSON.parse(body));
      if (body.length < 3) {
        console.log(chalk.red('The breed you entered does not exist. Please try another breed, or check your spelling.'));
      }
    }
  });
};

fetchBreed(args);
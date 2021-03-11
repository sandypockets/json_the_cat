const {fetchBreedDescription} = require('./breedFetcher');

const args = process.argv.slice(2);
const breedName = args[0];

fetchBreedDescription(breedName, (error, description) => {
  console.log("Error!: ", error);
  console.log("Desc!: ", description);
});
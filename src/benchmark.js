import autocannon from 'autocannon';
import { writeFile } from 'fs';
import { join } from 'path';

async function run() {
  const options = {
    url: 'http://localhost:6000/api/projects',
    connections: 20,
    pipelining: 2,
    duration: 20
  };

  const result = await autocannon(options);

  return result;
}

function writeToFile(results) {
  const path = join(__dirname, '../benchmark.json');

  writeFile(path, JSON.stringify(results, null, 2), (err, result) => {
    if (err) {
      console.log('Error during file writing', err);
    }
  });
}

run().then(result => writeToFile(result));

const needle = require('needle');
const fs = require('fs');

const args = process.argv.slice(2);
const filePath = process.argv[3];

needle.get(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile('index.html', response.body, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    }
    console.log(`Downloaded and saved ${response.body.length} bytes to ${filePath}`); 
});

});

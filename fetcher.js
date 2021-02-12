const request = require('request');
const fs = require("fs");

const args = process.argv.slice(2);
const url = args[0];
const filename = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.log('Problem with URL: Failed to write to file');
    return;
  }
  fs.writeFile(filename, body, (error) => {
    if (error) {
      console.log("Invalid Path: Failed to write to file");
      return;
    }
    const fileSize = body.length;
    console.log(`Downloaded and saved ${fileSize} bytes to ${filename}`);
  });
});
const mediumToMarkdown = require('medium-to-markdown');
const fs = require('fs');

const FILE_NAME = "_posts/2019-02-05-what-the-heck-is-a-perceptron.md"

// Enter url here
mediumToMarkdown.convertFromUrl('https://medium.com/@dannydenenberg/what-the-heck-is-a-perceptron-d13a26eda172')
  .then(function(markdown) { //=> Markdown content of medium post
    fs.writeFile(FILE_NAME, markdown, function(err, data) {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
  });
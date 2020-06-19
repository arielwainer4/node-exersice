const fs = require('fs');


const catFunc = process.stdin.on('data', (data) => {
  const entry = data.toString().trim();

  if(entry === 'cat') {
    fs.readFile('./', 'utf8', (err, files) => {
      if(err) {
        throw err
      } else {
        process.stdout.write(files.join('\n'));
      }
      process.stdout.write('\nprompt > ');
    })
  }
})

module.exports = catFunc;

const fs = require('fs');

  const lsFunc = process.stdin.on('data', (data) => {
    const entry = data.toString().trim();

    if(entry === 'ls') {
      fs.readdir('./', 'utf8', (err, files) => {
        if(err) {
          throw err
        } else {
          process.stdout.write(files.join('\n'));
        }
        process.stdout.write('\nprompt > ');
      })
    }
  })

module.exports = lsFunc;

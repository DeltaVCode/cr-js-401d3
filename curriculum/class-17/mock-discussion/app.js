'use strict';

const fs = require('fs');

const alterFile = (file, cb) => {
  fs.readFile( file, (err, data) => {
    if(err) { return cb(err); }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { return cb(err); }
      console.log(`${file} saved`);
      cb();
    });
  });
};

if (!module.parent) {
  let file = process.argv.slice(2).shift();
  alterFile(file);
}

module.exports = { alterFile };

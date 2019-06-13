'use strict';

const written = {};

exports.readFile = (file, cb) => {
  if (typeof file !== 'string') {
    throw TypeError('"file" must be a string');
  }
  if (typeof cb !== 'function') {
    throw TypeError('"cb" must be a function');
  }

  if(file.match(/bad/i)) {
    return delay(cb, 'Invalid File');
  }

  delay(cb, null, written[file] || Buffer.from(`${file} Contents`));
};

exports.writeFile = (file, buffer, cb) => {
  if (typeof file !== 'string') {
    throw TypeError('"file" must be a string');
  }
  if (!Buffer.isBuffer(buffer)) {
    throw TypeError('"buffer" must be a Buffer');
  }
  if (typeof cb !== 'function') {
    throw TypeError('"cb" must be a function');
  }

  if (file.match(/bad/i)) {
    return delay(cb, 'Invalid File');
  }

  written[file] = buffer;
  delay(cb, null, undefined);
};

exports.unlink = (file, cb) => {
  if (typeof file !== 'string') {
    throw TypeError('"file" must be a string');
  }

  if (file.match(/bad/i)) {
    return delay(cb, 'Invalid File');
  }

  delete written[file];
  cb();
};

function delay(callback, err, result) {
  setTimeout(() => callback(err, result), Math.random() * 25);
}

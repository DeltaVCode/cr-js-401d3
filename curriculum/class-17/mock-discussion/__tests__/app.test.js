'use strict';

jest.mock('fs');

const { alterFile } = require('../app');
const fs = require('fs');

describe('app', () => {
  it ('simply test that it should read and write after transform', (done) => {
    let file = `test.txt`;

    alterFile(file, () => {
      fs.readFile(file, (err, data) => {
        expect(err).toBeNull();
        expect(data.toString()).toBe('TEST.TXT CONTENTS');
        done();
      });
    });
  });

  it ('should read and write after transform', (done) => {
    let file = `${__dirname}/test.txt`;

    fs.unlink(file, () => {
      fs.writeFile(file, Buffer.from('hellow'), (err) => {
        expect(err).toBeNull();

        alterFile(file, () => {
          fs.readFile(file, (err, data) => {
            expect(err).toBeNull();
            expect(data.toString()).toBe('HELLOW');
            done();

          });
        });
      });
    });
  });
});

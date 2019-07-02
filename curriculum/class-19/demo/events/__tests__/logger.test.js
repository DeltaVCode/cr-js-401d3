'use strict';

const logger = require('../logger');
const hub = require('../hub');

describe('logger', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('handleSave', () => {
    it('console.log that payload was saved', () => {
      logger.handleSave({ id: 'pi' });

      expect(console.log).toHaveBeenCalledWith(`Record pi was saved`);
    });

    it('emits invalidate-cache event', () => {
      let payload = { stuff: true };
      let handler = jest.fn();
      hub.on('invalidate-cache', handler);

      jest.spyOn(hub, 'emit');

      logger.handleSave(payload);

      expect(handler).toHaveBeenCalledWith(payload);

      expect(hub.emit).toHaveBeenCalledWith('invalidate-cache', payload);
    })
  });

  describe('log', () => {
    it('logs with eventType and payload', () => {
      var testLogger = logger.log('test');

      testLogger('payload');

      expect(console.log).toHaveBeenCalledWith('test', 'payload');
    });

    it('does not log if payload is undefined', () => {
      var testLogger = logger.log('test');
      testLogger(undefined);
      expect(console.log).not.toHaveBeenCalled();
    });

    it('does log if payload is falsy', () => {
      var testLogger = logger.log('test');
      testLogger(0);
      expect(console.log).toHaveBeenCalledWith('test', 0);
    });
  });
});

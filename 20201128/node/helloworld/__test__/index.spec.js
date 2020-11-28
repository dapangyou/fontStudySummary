const { timeStamp } = require("console");
const { hasUncaughtExceptionCaptureCallback } = require("process");

test('测试 Hello World', () => { 
    const ret = require('../index');
    // console.log('hello world..',helloWorld);
    expect(ret)
        .toBe('helloworld');
 })
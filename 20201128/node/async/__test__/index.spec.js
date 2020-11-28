const { callback } = require("..");

import { callback } from '../index.js'
test('callback', done => { 
    callback();
    // 延迟1s结束
    // done();
    setTimeout( 
        done
    ,1000);
});
const path = require('path');
module.exports = class TestNow { 
    /**
     * 生成测试文件名
     */
    getTestFileName(filename) { 
        const dirname = path.dirname(filename);
        const basename = path.basename(filename);
        const extName = path.extname(filename);
        const testname = basename.replace(extName,`.spec${extName}`);
        return path.format({
            root: dirname + '/__test__/',
            base:testname
        });
    };
}
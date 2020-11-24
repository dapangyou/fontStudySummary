// 根据命令行参数 遍历读取文件

const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2];

function testReadFile(dir) {
    try {
        fs.accessSync(dir, fs.constants.F_OK);

        let state = fs.statSync(dir);

        if (state.isFile()) {
            // 如果是文件
            console.log('是一个文件.....');
        } else if (state.isDirectory()) {

            // 如果是文件夹
            console.log('是一个文件夹');
            let files = fs.readdirSync(dir);
            files.forEach(file => {
                // 递归
                testReadFile(path.join(dir, file));
            });
        }
    } catch (error) {
        console.log('该文件或者文件夹不存在....');
    }
}

testReadFile(inputPath);
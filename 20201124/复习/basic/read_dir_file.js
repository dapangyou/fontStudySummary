// 接收命令行参数 遍历文件夹 输出文件
const fs = require('fs');
const path = require('path');

// 接收命令行参数
let inputPath = process.argv[2];

function testDirPath(dir) {

    try {
        // 判断传入的路径是否存在
        fs.accessSync(dir, fs.constants.F_OK);

        let state = fs.statSync(dir);

        if (state.isFile()) {
            // 如果是文件
            console.log('是一个文件....');
        } else if (state.isDirectory()) {
            // 如果是文件夹
            console.log('是一个文件夹.....');
            let files = fs.readdirSync(dir);
            files.forEach(file => {
                testDirPath(path.join(dir, file));
            });
        }

    } catch (error) {
        console.log('该文件或者文件夹不存在!!!!!!');
    }
}

testDirPath(inputPath);
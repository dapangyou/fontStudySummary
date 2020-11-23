// 根据传入的参数来读取文件
// 引入核心对象
const path = require('path');
const fs = require('fs');

// 获取传入的参数
const inputPath = path.resolve(process.argv[2]);

function testReadFiles(dir) {
    try {
        // 判断该路径是否存在
        fs.accessSync(dir, fs.constants.F_OK);
        // 状态
        let state = fs.statSync(dir);

        if (state.isFile()) {
            // 如果是文件
            console.log('是一个文件**********' + dir);
        } else if (state.isDirectory()) {
            // 如果是文件夹
            console.log('是一个文件夹*********');
            // 递归
            let files = fs.readdirSync(dir);
            files.forEach(file => {
                testReadFiles(path.join(dir, file));
            });
        }
    } catch (error) {
        console.log('该文件或者文件夹不存在......');
    }
}


testReadFiles(inputPath);
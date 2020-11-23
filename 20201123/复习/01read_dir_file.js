// 接收命令行参数 根据该目录 读取目录下的所有文件并输出  遍历文件夹
const path = require('path');
const fs = require('fs');
// 修正路径
let inputPath = path.resolve(process.argv[2]);

function testReadFiles(dir) {
    try {
        // 判断该路径是否存在 fs.access(fs.constants.F_OK)
        fs.accessSync(dir, fs.constants.F_OK);

        // 状态
        let state = fs.statSync(dir);

        if (state.isFile()) {
            console.log('是一个文件......' + dir);
        } else if (state.isDirectory()) {
            console.log('是一个文件夹....');
            let files = fs.readdirSync(dir);
            files.forEach(file => {
                // 递归......
                testReadFiles(path.join(dir, file));
            });
        }
    } catch (error) {
        console.log('该文件或者文件夹不存在.....');
    }
}

testReadFiles(inputPath);
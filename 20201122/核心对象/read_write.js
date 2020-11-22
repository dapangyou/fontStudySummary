// 引入核心对象fs
const fs = require('fs');

// 读取文件
fs.readFile('file/read.txt', (error, data) => { 
    if (error) { throw error }
    console.log(data.toString("utf8"));
});

// 写文件
fs.writeFile('file/write.txt', '写入的数据啊.....', (error, data) => {
    // windows目录层级超级深的时候 写入会报错
    if (error) { throw error }
    console.log("文件写入结束啦......");
});
 
// 追加方式一 appendFile('path',data,callback)
fs.appendFile('file/write.txt', '我今天赚了1块钱', error => {
    if (error) { throw error }
    console.log('文件追加成功......');
 })
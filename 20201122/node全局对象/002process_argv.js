// 接收命令行参数 命令行传入的参数
console.log(process.argv);

// node可以接收命令行参数可以推导出
//  node -v  node -h 结果不一样 可以知道是根据获取的参数的
// 参数的差异来显示不同的东西

// process.argv => [node的绝对路径,文件的绝对路径,参数一,参数二.....]
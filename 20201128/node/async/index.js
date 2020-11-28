const logTime = (name) => {
    console.log(`Log.....${name}` + new Date().toLocaleDateString());
}
 
// 回调地狱
exports.callback = () => { 
    setTimeout(() => { 
        logTime('callback 1');
        setTimeout(() => { 
            logTime('callback 2');
            setTimeout(() => { 
                logTime('callback 3');
                setTimeout(() => { 
                    logTime('callback 4');
                },100)
            },100)
        },100)
    },100)
}
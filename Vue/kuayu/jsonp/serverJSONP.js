let express = require('express'),
    app = express();

app.listen(8001, _ => { 
    console.log('ok!');
})

app.get('/list', (req, res) => {
    let { callback = Function.prototype } = req.query;
    let data = {
        code: 200,
        message: "JSONP服务器返回的数据"
    }
    res.send(`${callback}(${JSON.stringify(data)})`);
});

const express     = require('express');
const path        = require('path');

const app         = express();
const usersRouter = require('./router/users');
let conf = {
    port: 8888,
    host: 'localhost'
};



//配置web服务静态页面
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // post表单数据解析成json 
// app.post('/', function (req, res, next) {
//     console.log(req.body)
//     res.json(req.body)
// });
app.use('/users', usersRouter);





//设置监听
app.listen(conf.port, conf.host, () => {
    console.log(`server is running on http://${conf.host}:${conf.port}`)
})
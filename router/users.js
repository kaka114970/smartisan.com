const express = require('express');
const conn = require('../dao/conn');
const crypto = require('crypto');

const router = express.Router();//获得路由对象


// router.route('/')
//     .get((req, res, next) => {
//         console.log(req.query);
//         res.json({ 'method': 'get' });
//     })
//     .post((req, res, next) => {
//         console.log(req.body);
//         res.json({ 'method': 'post' });
//     });


// router.route('/reg')
//     .post((req,res,next)=>{
//         //console.log(req.body);
//         let md5 = crypto.createHash('md5');
//         let passResult = md5.update(req.body.password).digest('hex');
//         //console.log(passResult);

//         let sql = `INSERT INTO users (name, password, address, phone, email) VALUES 
//         ('${req.body.name}', '${passResult}', '${req.body.address}', '${req.body.phone}', '${req.body.email}')`;
//         console.log(sql);
//         //res.json(req.body);
//         conn.query(sql,(err,result)=>{
//             if(err) console.log(err);
//             console.log('添加成功');
//         });
//     });

router.route('/reg')
    .post((req, res, next) => {
        //判断用户名是否存在
        let searchUser = `select * from users where tel='${req.body.tel}'`;
        conn.query(searchUser, (err, results) => {
            if (err) throw err;
            if (results.length) {
                res.json('用户号码已存在');
            } else {
                // console.log(2)
                let md5 = crypto.createHash('md5');//创建一个哈希加密
                let passResult = md5.update(req.body.password).digest('hex');//加密内容获得16进制结果
                // console.log(passResult);
                let sql = `insert into users(tel,password,name)
                values('${req.body.tel}','${passResult}','${req.body.name}')`;
                // console.log(sql);
                conn.query(sql, (err, result) => {
                    //执行sql语句
                    if (err) console.log(err);
                    // console.log(result);
                    if (result.insertId) {
                        res.cookie('tel', req.body.tel);
                        res.cookie('isLogined', true);
                        res.json(
                            "注册成功"
                        );
                        // res.redirect('../html/login.html');
                    }
                });
            }
        });

        // console.log(req.body);

    });


router.route('/log')
    .post((req, res, next) => {
        // console.log(req.cookies);
        let md5 = crypto.createHash('md5');//创建一个哈希加密
        let passResult = md5.update(req.body.password).digest('hex');

        let searchUser = `select * from users where tel='${req.body.tel}' and password='${passResult}'`;

        conn.query(searchUser, (err, results) => {
            if (err) throw err;
            if (results.length) {
                res.cookie('tel', req.body.tel);
                res.cookie('isLogined', true);
                res.json('登录成功');
            } else {
                res.json('用户名或密码错误');
            }
        });
    })










module.exports = router; //导出路由
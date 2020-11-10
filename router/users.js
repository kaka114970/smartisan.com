const express = require('express');
const conn    = require('../dao/conn');
const crypto  = require('crypto');

const router  = express.Router();//获得路由对象


// router.route('/')
//     .get((req, res, next) => {
//         console.log(req.query);
//         res.json({ 'method': 'get' });
//     })
//     .post((req, res, next) => {
//         console.log(req.body);
//         res.json({ 'method': 'post' });
//     });


router.route('/reg')
    .post((req,res,next)=>{
        //console.log(req.body);
        let md5 = crypto.createHash('md5');
        let passResult = md5.update(req.body.password).digest('hex');
        //console.log(passResult);
        
        let sql = `INSERT INTO users (name, password, address, phone, email) VALUES 
        ('${req.body.name}', '${passResult}', '${req.body.address}', '${req.body.phone}', '${req.body.email}')`;
        console.log(sql);
        //res.json(req.body);
        conn.query(sql,(err,result)=>{
            if(err) console.log(err);
            console.log('添加成功');
        });
    });

module.exports = router; //导出路由
var express = require('express');
var router = express.Router();
var fs=require('fs')
var dd=0
var dd2=0
/* GET home page. */

router.get('/', function(req, res, next) {
	dd++
	fs.readFile('public/lx.txt','utf-8',function(err,data){
		if(err){
			console.log(err)
		}else{
			console.log(data)
			fs.writeFile('public/lx.txt','index访问的次数:'+dd,function(err){
				if(err){
					console.log(err)
				}
			})
			res.render('index',{title:data})
		}
	})
});

router.get('/index2', function(req, res, next) {
	dd2++;
	fs.readFile('public/lx2.txt','utf-8',function(err,data){
		if(err){
			console.log(err)
		}else{
			console.log(data)
			fs.writeFile('public/lx2.txt','ix访问的次数:'+dd2,function(err){
				if(err){
					console.log(err)
				}
			})
			res.render('index2',{title:data})
		}
	})
});

module.exports = router;

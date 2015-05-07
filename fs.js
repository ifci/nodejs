/**
 * Created by Administrator on 2015/5/3 0003.
 */

var fs = require('fs');

/*fs.readFile('sum.js', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);  //输出为16进制数据
        console.log(data.toString());   //输出为正常的文本格式
    }
})*/

/*
fs.readFile('sum.js', 'utf-8', function(err, data) {   //第二个参数为编码格式
    if(err){
        console.log(err);
    }else {
        console.log(data);
    }
})*/


//异步操作
var data = fs.readFileSync('sum.js', 'utf-8');
console.log(data);
// process.stdout  --> standard output 标准的信息输出
// process.stderr  --> standard error  标准的错误输出

// process.stdin  --> standard in  记录键盘录入

//process.stdout.write('This is stdout.');

//process.stderr.write('This is stderr.');

//process.stdin.setEncoding('utf-8');
/*
process.stdin.on('data', function(data){
    console.log(data);
})*/

/*
process.stdin.on('readable', function(){   //有东西可读取的时候
    var data = process.stdin.read();
    console.log(data);
})*/


/*console.log("dirname:" + __dirname);    //dirname -> js文件所在目录
console.log("cwd:" + process.cwd());    // cwd() -> 执行node命令时所在的目录 （current working dir）*/

/*process.on('exit', function(){   //程序退出时的事件
    console.log('process will exit.');
})*/


/*
process.on("SININT", function(){     //监听断点，改变系统默认的退出操作
    console.log('programe has a sinint.');
    process.exit();    //调用系统的正常退出
})*/



console.log(process.argv);     //当前进程的命令行参数数组。
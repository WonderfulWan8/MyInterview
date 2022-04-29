const http = require('http')//commonjs
// require 三个层级：1.系统自带模块
// 2.npm安装模块 3.自定义模块
const server = http.createServer( (req,res)=>{
    //req request, res response
    // console.log("已经收到http请求");
    const url = req.url;
    console.log('url is :',url);

    res.end('fku');// res返回信息给前端
} )

server.listen(3000)
console.log('http 请求已经被监听，3000端口，请访问http://localhost:3000');
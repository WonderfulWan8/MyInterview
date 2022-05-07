const http = require('http')//commonjs
// require 三个层级：1.系统自带模块
// 2.npm安装模块 3.自定义模块
const querystring = require('querystring');

const server = http.createServer( (req,res)=>{
    const url = req.url;
    const path = url.split('?')[0];///api/list
    const queryStr = url.split('?')[1];// a=100&b=200
    const method = req.method;
    const query = querystring.parse(queryStr || '');
    
    // 定义路由：模拟获取留言板列表
    if(path === '/api/list' && method === 'GET'){
        // 返回结果
        const result = {
            errno: 0,
            data: [
                {user: '张三', content: '留言1'},
                {user: '李四', content: '留言2'}
            ]
        }
        res.writeHead(200,{ 'Content-type' : 'application/json' });
        res.end(JSON.stringify(result));
    }
    //定义路由：模拟创建留言,POST请求需要借助工具模拟，postman
    if(path === '/api/create' && method === 'POST'){
        const result = {
            errno: 200,
            message: '创建留言成功'
        }
        res.writeHead(200, {'Content-type' : 'application/json'});
        res.end(JSON.stringify(result));
    }
    // 没有命中路由，默认404
    // res.end('404');
    res.writeHead(404,{ 'Content-type' : 'text/plain' });// text/plain代表是字符串
    res.end('404 Not Found');
} )

server.listen(3000)
console.log('http 请求已经被监听，3000端口，请访问http://localhost:3000');
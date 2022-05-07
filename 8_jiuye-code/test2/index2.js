const http = require('http')//commonjs
// require 三个层级：1.系统自带模块
// 2.npm安装模块 3.自定义模块
const querystring = require('querystring');


const server = http.createServer( (req,res)=>{
    const url = req.url;
    const path = url.split('?')[0];///api/list
    const queryStr = url.split('?')[1];// a=100&b=200
    // url可能会带有参数，通过？分割，只记录路径
    const method = req.method;
    
    // 解析querystring
    // const query = {};
    // console.log("queryStr: ",queryStr);
    // // 如果queryStr不为空，再执行
    // queryStr && queryStr.split('&').forEach( item=>{
    //     const key = item.split('=')[0];
    //     const value = item.split('=')[1];
    //     query[key] = value; // {a: '100', b:'200'}
    // } );

    
    const query = querystring.parse(queryStr || '');
    console.log("query is : ",query);

    console.log("path:",path);
    // console.log('url is',url); 
    // console.log('method is : ', method);

    
    // 定义路由：模拟获取留言板列表
    if(path === '/api/list' && method === 'GET'){
        console.log("type:",query.filterType);
        if(query.filterType === '1'){
            res.end('this is a list router');            
        }
        if(query.filterType === '2'){
            res.end('this is a list router,only mine');            
        }
    }

    //定义路由：模拟创建留言,POST请求需要借助工具模拟，postman
    if(path === '/api/create' && method === 'POST'){
        res.end('this is a create router');
    }
    res.end('404');
} )

server.listen(3000)
console.log('http 请求已经被监听，3000端口，请访问http://localhost:3000');
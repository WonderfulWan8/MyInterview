const http = require('http');

const serve = http.createServer( (req,res)=>{
    const url = req.url
    const path = url.split('?')[0];
    res.end(path+'123');
});

serve.listen(3000);
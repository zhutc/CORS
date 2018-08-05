const HTTP = require('http')
let requestTimes = 1;

let server = HTTP.createServer((request,response)=>{
    console.log('CORC Server Recieve Request', "\n Method : " , request.method , "\n Headers : ", request.headers , )
    if("OPTIONS" == request.method){
        /** 处理浏览器的预检请求 */
        response.writeHead(200,{
            'access-control-allow-methods':'GET,POST,OPTIONS',
            'access-control-allow-headers':'Content-Type',
            'access-control-allow-origin': request.headers['origin'],
            'access-control-max-age':`${24*60*60}`,/** 一天,仅针对预检请求（preflight）有效 */
            'access-control-allow-credentials':true,
        })
        response.end('CORS Sever OPTIONS Success Response')
    }else{
        response.writeHead(200,{
            'Content-Type':'text/plain',
            'access-control-allow-origin': request.headers['origin'],
            'set-cookie':`requestTimes=${requestTimes++}`,
            'access-control-allow-credentials':true,
        })
        response.end('CORS Sever Success Response')
    }
    
})
server.listen(3001)

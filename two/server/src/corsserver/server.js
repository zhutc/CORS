const HTTP = require('http')
let server = HTTP.createServer((request,response)=>{
    console.log('CORC Server Recieve Request', "\n Method : " , request.method , "\n Headers : ", request.headers , )
    if("OPTIONS" == request.method){
        /** 处理浏览器的预检请求 */
        response.writeHead(200,{
            'access-control-allow-methods':'GET,POST,OPTIONS',
            'access-control-allow-headers':'Content-Type',
            'access-control-allow-origin':"*"

        })
        response.end('CORS Sever OPTIONS Success Response')
    }else{
        response.writeHead(200,{
            'Content-Type':'text/plain',
            'access-control-allow-origin':"*"
        })
        response.end('CORS Sever Success Response')
    }
    
})
server.listen(3001)

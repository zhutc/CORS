const HTTP = require('http')
let server = HTTP.createServer((request,response)=>{
    console.log('CORC Server Recieve Request', "\n Method : " , request.method , "\n Headers : ", request.headers , )
    response.writeHead(200,{
        'Content-Type':'text/plain',
        'access-control-allow-origin':"*",/* 允许任何来源 */
    })
    response.end('CORS Sever Success Response')
})
server.listen(3001)

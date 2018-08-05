const path = require('path')
const fs = require('fs')
const express = require('express')

let app = express()
let indexPath = path.join(__dirname,"..","html",'index.html')
app.get("/",function(request,response){
    fs.readFile(indexPath,{encoding:'utf8'},(err,data)=>{
        response.set('Content-Length',data.length)
        response.set('Content-Type','text/html')
        response.writeHead(200)
        response.end(data)
    }) 
    
})
app.listen(3000)
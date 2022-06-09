const http = require('http')

const server = http.createServer((req, res)=>{
console.log(req)
res.end("welcome to home page")

})

server.listen(3000)


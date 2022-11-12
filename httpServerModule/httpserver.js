const http = require('http')
const port = process.env.PORT || 3000//specifies port on environment varible on which the app will listen 

const server = http.createServer((req,res) => 
{
    // console.log(req)
    console.log(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>My new heading</h1><p>server sent this </p>')
})

server.listen(port, ()=>{}, console.log( `Server is lintening on port ${port}`))
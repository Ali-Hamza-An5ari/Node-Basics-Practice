const http = require('http')
const port = process.env.PORT || 3000//specifies port on environment varible on which the app will listen 
const fs = require('fs')

const server = http.createServer((req,res) => 
{
    // console.log(req)
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html')
    if(req.url == '/')
    {  
        res.statusCode = 200
        res.end('<h1>My new heading</h1><p>server sent this </p>')
    }
    else  if(req.url == '/Home')
    {
        res.statusCode = 200
        const homeFile = fs.readFileSync('httpServerModule/home.html')
        res.end(homeFile.toString())
    }
    else  if(req.url == '/About')
    {
        res.statusCode = 200
        res.end('<h1>The website is built by protagonist</h1><p>server sent this </p>')
    }
    else
    {
        // res.notFunc() //this is an illegal function and will crash the server on calling. we will use nodemon to deal wtih this anomaly
        res.statusCode = 404
        res.end('<h1>page not found</h1><p>server sent this </p>')
  
    }
})

server.listen(port, ()=>{}, console.log( `Server is lintening on port ${port}`))
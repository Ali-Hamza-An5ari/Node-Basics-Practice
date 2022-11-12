// const fs = require('fs');
import * as fs from 'fs'

//callback runs when file is created or read

fs.readFile('file.txt', 'utf-8', (err, data)=>{
    console.log(err,data)
})

//readFileSync blocks the async execution  of Nodejs 

// var fData = fs.readFileSync('file.txt') 
// // console.log(fData)//prints <Buffer 6c 6f 72 65 6d 20 65 70 73 75 6d>. call toString() for printing the file content
// console.log(fData.toString())
// console.log("after reading")

fs.writeFile("a.txt","file content",()=>{
    console.log("written to the file")
})

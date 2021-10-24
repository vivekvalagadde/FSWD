const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request,response) => {
    
    const {url} = request
    if(url=='/login'){
        response.write('<h1>login<h1>')
        response.end()
    }

    if(url=='/signup'){
        response.write('<h1>signup<h1>')
        response.end()
    }
})


server.listen(3000, () => {
    console.log(`server listening at port ${3000}`)
})
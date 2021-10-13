const path = require('path')

console.log(path.dirname("./GIT/temp/utils.js"))

console.log(path.resolve("./app.js"))

console.log(path.relative('./', "./app.js"))

console.log(__dirname)

console.log(path.join(__dirname, 'app.js'))

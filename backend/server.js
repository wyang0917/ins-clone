//create react app
//vite react
//npm i express
const express = require('express')
//create a web server
const app = express()
const PORT = 8000
//使用箭头函数代替funcition()
app.listen(PORT,() =>{
  console.log('server is running on http://localhost:8000');
})
//lsof -i tcp:8000   kill -9 45164
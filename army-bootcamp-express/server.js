require('dotenv').config();
const http = require('http');
const app = require('./app/app')

// console.log(process.env.PORT)

const server = http.createServer(app);

// ?? sign will not support in old version. you can use ||
const port = process.env.PORT ?? 8000;

server.listen(port, () => {
    console.log(`Server listening on PORT ${port}`)
})



// const { query } = require('express');
// const express = require('express');

// const app = express();

// app.use(express.static(__dirname + '/public'))

// // local middleware
// const simpleLogger = (req, res, next) => {
//     console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`);
//     const name = req.query.name;
//     if (name === 'mmh') {
//         res.json({ message: 'Bad Request' })
//     }
//     next()
// }

// // global middleware
// app.use(simpleLogger)

// app.get('/hello', (req, res, next) => {
//     res.json({ message: "hello" })
// })

// app.get('/', (req, res, next)=>{
//     res.json({message:'sweet'})
// })

// app.listen(8000, () => {
//     console.log("aplication running on port ")
// })
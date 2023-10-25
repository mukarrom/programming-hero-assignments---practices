/**
 * ------------------------------------------
 * 5 steps to create node server
 * ------------------------------------------
 * 1. create folder: 'mkdir my-node-project' and go this folder: 'cd /my-node-project'
 * 2. npm init
 * 3. npm i express cors  mongodb
 * npm install -g nodemon (if needed)
 * 4. create file: index.js
 * 5. Edit package.json file: "start": "node index.js", "start-dev": "nodemon index.js"
 * ------------------------------------------
 * code in index.js 5 steps to run server
 * ------------------------------------------
 * 1. const express = require("express");
 * 2. const app = express()
 * 3. const port = process.env.PORT || 5000;
 * 4. app.get('/', (req,res)=>{res.send('Running my node crud')})
 * 5. app.listen(port, ()=>{console.log('CRUD Server is running')})
 * ------------------------------------------
 * Create Atlas Account
 * ------------------------------------------
 * 1. sign up google access
 * 2. create cluster
 * 3. create user dbUser and password
 * 4. Network Access --> ip address: allow all
 * 5. database > Connect > code copy paste in index.js
 * ------------------------------------------
 * CRUD Operation
 * ------------------------------------------
 * 1. node mongodb CRUD > Fundamentals
 * 2. Create async run function
 * ----------------------------------------------
 * Integrate sending data from client to server 
 * ----------------------------------------------
 * client siteA: create form
 * on submit get form data and create user object
 * on server: Create user POST method to receive data on the backend
 * on client site: set fetch with POST, headers, body
 * Make sure you return a json from the POST API
 * ------------------------------------------------
 * Load data to the client side
 * ---------------------------------------------------
 * 1. create get API
 * 2. create a query object
 * 3. collection.find(query)
 * 4.cursor.toArray()
 * 5.return the result
 * 6. from client useEffect and display like you have done before
 * -------------------------------------------------
 * Delete
 * --------------------------------------------------
 * 
*/
require('dotenv').config();
const express = require('express'); // commonjs
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');

const mysql = require('mysql2');

const app = express(); // app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

// khai bao route
app.use('/test',webRouter)

//test connection
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'tienvippro'
});

// simple query
connection.query(
  'SELECT * FROM Users u;',
  function(err, results, fields) {
    console.log(">>results: ",results); // results contains rows returned by server
    console.log(">>>fields: ",fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
})
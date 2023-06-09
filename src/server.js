require('dotenv').config();
const express = require('express'); // commonjs
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');

const app = express(); // app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

// khai bao route
app.use('/test',webRouter)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
})
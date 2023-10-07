const express = require('express'); //common js
require('dotenv').config();

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8081; // port to connect
const hostname = process.env.HOST_NAME; // port to connect

// Config template engine
configViewEngine(app);

//Route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});

const express = require("express");
const app = express();
const usuariosRouter = require('./routes/usuarios')
const driverRouter = require('./routes/driverRoute');
const bodyParser = require("body-parser");



app.use(bodyParser.json())
app.use(express.json())

app.use('/usuarios', usuariosRouter);
app.use('/api/v1/drivers', driverRouter);



app.listen(3000, () => {
  return console.log(`Nodejs Express is running on http://localhost:3000`);
});

const express = require('express');
const routes = require('./routes/routes');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.set("views", path.join(__dirname,"views")) /* voce já esta em views */
app.set("view engine", "ejs"); 
app.use("/", routes);

app.listen(3000 , () => {
    console.log('Acesse http://localhost:3000');
    console.log('servidor rodando na porta 3000');
});


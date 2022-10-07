require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");
const { urlencoded } = require("express");

connectToDb();
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//receber oq esta vindo do index.ejs, formulario body
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () =>
  console.log(`Servidor rodando na porta http://localhost:${port}`)
);

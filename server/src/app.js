const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Routes");
// var bodyParser = require('body-parser');
//Converte form-data para JSON
app.use(express.urlencoded({ extended: true }));
// Converte requisições do body para JSON
app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;

const express = require('express');
const path = require ("path");
const app = express();

app.use(express.static("public"));

app.listen (3000, () => console.log ("Servidor corriendo"));

app.get ("/", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/home.html"));
});

app.get ("*", (req, res) => {
    res.status (404).send ("Error: página no encontrada");
});
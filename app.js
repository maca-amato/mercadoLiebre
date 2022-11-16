const express = require('express');
const path = require ("path");
const app = express();


app.use(express.static("public"));

app.listen (3000, () => console.log ("Servidor corriendo"));

app.get ("/", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/home.html"));
});

app.get ("/ofertas", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/ofertas.html"));
});

app.get ("/tiendas-oficiales", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/tiendas-oficiales.html"));
});

app.get ("/vender", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/vender.html"));
});

app.get ("/ayuda", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/ayuda.html"));
});

app.get ("/crea-tu-cuenta", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/crea-tu-cuenta.html"));
});

app.get ("/ingresa", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/ingresa.html"));
});

app.get ("/mis-compras", (req, res) => {
    res.sendFile (path.join (__dirname, "/views/mis-compras.html"));
});

app.get ("*", (req, res) => {
    res.status (404).send ("Error: página no encontrada");
});
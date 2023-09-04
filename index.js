const express = require('express');
const app = express();

/**
 * Verbos HTTP
 * GET, POST, PATCH, PUSH, DELETE
 */

app.get('/', (req, res, next) => {
    res.status(200);
    res.send('<h1>Bienvenido</h1>');
});

app.get('/:name', (req, res, next) => {
    let name = req.params.name
    res.status(200);
    res.send(`<h1>Hola ${name}</h1>`)
})

app.listen(process.env.port || 3000, () => {
    console.log('Server is running ...');
});


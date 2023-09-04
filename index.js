const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');

/**
 * Verbos HTTP
 * GET, POST, PATCH, PUSH, DELETE
 */

app.get('/', (req, res, next) => {
    res.status(200);
    res.send("Bienvenido al Pokedex");
});

app.get('/pokemon/all', (req, res, next) => {
    res.status(200);
    res.send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id - 1;
    if (id >= 0 && id <= 150) {
        res.status(200);
        res.send(pokemon[req.params.id - 1]);
    } else {
        res.status(404);
        res.send('Pokemón no encontrado');
    }
});

app.get('/pokemon/:name', (req, res, next) => {
    const name = req.params.name;
    for (i = 0; i < pokemon.length; i++) {
        if (pokemon[i].name == name) {
            res.status(200);
            res.send(pokemon[i]);
        }
    }
    res.status(404);
    res.send('Pokemón no encontrado');
})

app.listen(process.env.port || 3000, () => {
    console.log('Server is running ...');
});


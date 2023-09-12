const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');

// post method unchanged because we are not 
// retrieving data from any json file or db jet.
pokemon.post('/', (req, res, next) => {
    return res.status(200).send(req.body);
})

// get all pokemon
pokemon.get('/', async (req, res, next) => {
    const pkmn = await db.query("SELECT * FROM pokemon");
    return res.status(200).json(pkmn);
});

// get pokemon by id
pokemon.get('/:id([0-9]{1,3})', async (req, res, next) => {

    const id = req.params.id;
    const pkmn = await db.query("SELECT * FROM pokemon WHERE pok_id = " + id );

    (id >= 1 && id <= 722) ?
        res.status(200).json(pkmn):
        res.status(404).send('Pokemón no encontrado')
    ;
});

// get pokemon by name
pokemon.get('/:name([A-Za-z]+)', async (req, res, next) => {

    const name = req.params.name;
    
    // parsed the name to lowercase to avoid errors
    const pkmn = await db.query("SELECT * FROM pokemon WHERE LOWER(pok_name) = LOWER('" + name + "')");

    (pkmn.length > 0) ?
        res.status(200).json(pkmn):
        res.status(404).send('Pokemón no encontrado')
    ;

})

module.exports = pokemon ;
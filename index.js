const express = require('express'); 
const app = express();

/**
 * Verbos HTTP
 * GET, POST, PATCH, PUSH, DELETE
 */

app.get('/', (req, res, next) => {
    res.status(200);
    res.send('<h1>Bienvenido<h1>');
});

app.listen(3000, () => {
    console.log(`
    Server is running on port: 3000`
    );
});


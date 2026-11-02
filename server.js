const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

app.listen(80, '0.0.0.0', () => {
    console.log('Servidor iniciado.');
});
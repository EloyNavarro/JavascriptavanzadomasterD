const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/noticias.json', (req, res) => {
    res.sendFile(__dirname + '/noticias.json');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
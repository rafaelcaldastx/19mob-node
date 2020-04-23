const express = require('express');

const app = express();

//app.get('/', function(req,res) {
app.get('/', (req,res) => {
    res.send('Cheguei na minha rota de GET')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

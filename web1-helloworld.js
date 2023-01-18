const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello World!');
});
/* Port under 1024 kan endast admin på datorn ansluta
app.listen(8080, () => {
console.log('Example app listening at http://localhost:8080');
});*/
/*
app.listen(8080, ('0.0.0.0') => {//Tar emot anslutningar överallt
    console.log('Example app listening at http://localhost:8080');
    });*/

    app.listen(8080, 'localhost',() => {//Tar emot anslutningar endast från localhost
        console.log('Example app listening at http://localhost:8080');
        });
const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello World!');
});
app.get('/login', (req, res) => {
let user = req.query.user;
let pass = req.query.pass;
// Godkänd inloggning om user består av små bokstäver och pass av små
if (user == user.toLowerCase() & pass == pass.toUpperCase()) {
res.send('Inloggad<br>User:' + user + '<br>Pass:' + pass);
}
else {
res.send('Fel lösenord<br>User:' + user + '<br>Pass:' + pass);
}
});
app.listen(8080, () => {
console.log('Example app listening at http://localhost:8080');
});

let mysql = require('mysql2');
function errResHandler(error, result, fields){
    if (error){
        console.log('Databasfel '+ error);//CVonsol.log av ev. error meddelande
    }
    else{
        //Result=tabell i listform? .solution= columnen solution
        console.log('Result: ', result[0]);
        
    }

}
let connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'krakekrake',
database : 'Databasteknik',
insecureAuth : true
});
function printarray(result)
{
for (let i = 0; i < result.length; i++) {
console.log(result[i]);
}
}
connection.connect();
// connection.query("select * from Employee where Job = 'Analytiker'", [], function (error, result, fields) { // Dåligt
connection.query("select * from Employee where Job = ?", ['Analytiker'], function (error, result, fields) { // Bra
if (error) throw error;//Uppdatera till förra exemplet
printarray(result);
});
connection.query("select * from Employee where Job = ?", ['Analytiker'],()=> errResHandler.errResHandler);

connection.end();
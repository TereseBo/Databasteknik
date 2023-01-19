// db1-mysqlconnect.js
var mysql = require('mysql2');
var connection = mysql.createConnection({//f() för att koppla upp till db med specificerade uppgifter
host : 'localhost',
user : 'root',
password : 'superhemligt', // <-- ALDRIG NÅGRA LÖSENORD I KOD I PRODUKTION
database : 'Databasteknik',
//insecureAuth : true
});
function errResHandler(error, result, fields){
    if (error){
        console.log('Databasfel '+ error);//CVonsol.log av ev. error meddelande
    }
    else{
        //Result=tabell i listform? .solution= columnen solution
        console.log('Result: ', result);
    }

}
function bob(){
    console.log('hej')
}
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, result, fields) {//Namnlös funktion som skickar in parametrar i sql statement?
    if (error){
        console.log('Databasfel '+ error);//CVonsol.log av ev. error meddelande
    }
    else{
        //Result=tabell i listform? .solution= columnen solution
        console.log('The solution is: ', result[0].solution);
    }
});
connection.query('select * from City', errResHandler)
connection.end();

module.exports.errResHandler=errResHandler;

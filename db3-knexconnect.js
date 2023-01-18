const { DBError } = require('objection');

var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        //port: '3306',
        user: 'root',
        password: 'krakekrake',
        database: 'Databasteknik'
    }
});
knex.raw('SELECT 1 + 1')
    .then((result) => {
        console.log(result[0][0]);//Index motsvarar rad och kolumn
        knex.destroy();
    })
    .catch(DBError => {
        console.log('Databasfel:' + DBError);
        knex.destroy();//Om denna rad saknas bara fortsätter den köra för evigt i väntan på fler svar från db
    });
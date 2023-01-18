var knex = require('knex')({
    client: 'mysql2',
    connection: {
    host: 'localhost',
   // port: '3306',
    user: 'root',
    password: 'krakekrake',
    database: 'Databasteknik'
    }
    });
    const { Model } = require('objection');
    Model.knex(knex);
    class Employee extends Model {
    static get tableName() {
    return 'Employee';
    }
    }
    const express = require('express');
    const app = express();
    app.get('/', (request, response) => {
    Employee.query().where('Job', 'Analytiker').then(results => response.send(results));
    });
    app.listen(8080, () => {
    console.log('Example app listening at http://localhost:8080');
});
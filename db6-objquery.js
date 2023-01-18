var knex = require('knex')({
    client: 'mysql2',
    connection: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'krakekrake',
    database: 'Databasteknik'
    }
    });
    const { Model } = require('objection'); //Model=hjärtat i objection, extendas fölr varje tabell
    Model.knex(knex);
    class Employee extends Model {//Klass för varje tabell och definiera relationerna
    static get tableName() {
    return 'Employee';
    }
    }
    function printarray(result)
    {
    for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}
for (let i = 0; i < result.length; i++) {
var employee = result[i];
console.log(employee.EmpID, employee.Lastname, employee.Firstname);
}
}
async function main()
{
const employees = await Employee.query().where('Job', 'Analytiker');//Anrop sker på inlagt object
printarray(employees);
}
main().then(() => knex.destroy());

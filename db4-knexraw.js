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
function printarray(result) {
    for (let i = 0; i < result[0].length; i++) {
        console.log(result[0][i]);
    }
}
async function main() {
    const result = await knex.raw('select * from Employee where Job = ?', ['Analytiker']);
    printarray(result);
}
main().then(() => knex.destroy());//Lägg till catch
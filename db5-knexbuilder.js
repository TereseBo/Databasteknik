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
    function printarray(result)
    {
    for (let i = 0; i < result.length; i++) {
    console.log(result[i]);//Hela resultatet per rad
    }
    for (let i = 0; i < result.length; i++) {
    var employee = result[i];//Valda kolumner?
    console.log(employee.EmpID, employee.Lastname, employee.Firstname);
    }
    }
    async function main()
    {//Query
    const result = await knex.select().table('Employee').where('Job', 'Analytiker');
    printarray(result);//Result print
    }
    main().then(() => knex.destroy()
    .catch(DBError =>{console.log('Databasfel:'+DBError);
knex.destroy();
})
    
    );//Add catyc
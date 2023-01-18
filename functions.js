function errResHandler(error, result, fields){
    if (error){
        console.log('Databasfel '+ error);//CVonsol.log av ev. error meddelande
    }
    else{
        //Result=tabell i listform? .solution= columnen solution
        console.log('Result: ', result);
        
    }

}
module.exports.errResHandler=errResHandler;
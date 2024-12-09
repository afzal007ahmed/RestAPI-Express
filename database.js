let sqlite = require('sqlite3').verbose() ;
let database = new sqlite.Database('./tutorial_database.db' , (err) => {
    if( err ) {
        console.log( err ) ; 
    }
    else{
        console.log('connected to database') ;
    }
})

database.run(`CREATE TABLE IF NOT EXISTS TUTORIAL (
    id integer primary key autoincrement ,
    title text not null, 
    description text not null ,
    published boolean default false  
)` , (err) => {
    if( err ) {
        console.log( err ) ;
    } 
})

module.exports = {database} ;
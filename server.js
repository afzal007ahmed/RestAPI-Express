let express = require('express') ;
let app = express() ;

// Convert the request into JavaScript Object ;
app.use( express.json())

// Calls the router function as the server starts ;
require('./router.js')(app) ;


// To detect the request on this port ;
app.listen( 3000 , () => {
    console.log('Listening') ;
})
module.exports = (app) => {
    let {create , getAll , getById , changeId , findPublished , deleteAll , deleteRow} = require('./controller.js') ;
    let router  = require('express').Router() ;

    router.get('/published' ,findPublished) 

    router.post('/' , create ) ;

    router.get('/' , getAll) ;

    router.get('/:id', getById);

    router.put( '/:id' , changeId) ;

    router.delete('/' , deleteAll);

    router.delete('/:id' , deleteRow ) ;

    app.use('/api/tutorial' , router )    

} 

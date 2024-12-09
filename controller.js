let { createRow, getAllRows, getRowById, changeRowbyId, findAllPublishedRows  , deleteAllRows , deleteRowId } = require('./model.js');


function validId(val) {
    let b = 0;
    for (let i of val) {
        if (i < '0' || i > '9') {
            b = 1;
        }
    }
    return b;
}
create = (req, res) => {
    if (Object.keys(req.body) == 0) {
        return res.send('Please send something valid');
    }

    else {
        createRow(req, (err) => {
            if (err) {
                res.send(err);
                res.end();
            }
            else {
                res.send('successfully inserted the row');
                res.end();
            }
        })
    };
}

getAll = (req, res) => {

    getAllRows((err, data) => {
        if (err) {
            res.send(err);
            res.end();
        }
        else {
            res.send(data);
            res.end();
        }
    })
}

getById = (req, res) => {

    b = validId(req.params.id);
    if (b) {
        res.send('Please give a valid id :-) ');
        res.end();
    }
    else {
        getRowById(req, (err, data) => {
            if (err) {
                res.send(err);
                res.end();
            }
            else {
                res.send(data);
                res.end();
            }
        })
    }
}

changeId = (req, res) => {

    b = validId(req.params.id);
    if (b) {
        res.send('Please give a valid id :-) ');
        res.end();
    }
    else {
        changeRowbyId(req, (err) => {
            if (err) {
                res.send(err);
                res.end();
            }
            else {
                res.send('Updated Successfully');
                res.end();
            }
        })
    }


}

findPublished = (req, res) => {
    findAllPublishedRows((err, data) => {
        if (err) {
            res.send(err);
            res.end();
        }
        else {
            res.send(data);
            req.end();
        }
    })
}

deleteAll = (req, res) => {
    deleteAllRows((err) => {
         if(err) {
            res.send( err ) ;
            res.end() ;
         }
         else{
            res.send('Deleted all the data') ;
            res.end() ;
         }
    })

}

deleteRow = ( req , res ) => {

 
    b = validId(req.params.id);
    if (b) {
        res.send('Please give a valid id :-) ');
        res.end();
    }
    deleteRowId(  req.params.id , (err) => {
           if( err ) {
            res.send(err) ;
            res.end() ;
           }
           else{
            res.send(`${req.params.id} is deleted` ) ;
            res.end() ;
           }

    })
}


module.exports = {
    create, getAll, getById, changeId, findPublished, deleteAll , deleteRow
}
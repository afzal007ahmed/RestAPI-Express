
let { database } = require('./database.js');

createRow = (req, result) => {
    let obj = [req.body.title, req.body.description];
    if (req.body.published != undefined) {
        obj.push(res.body.published);
    }
    if (obj.length == 2) {
        database.run('INSERT INTO TUTORIAL (title,description) VALUES (? , ? )', obj, (err) => {
            if (err) {
             result(err);
            }
            result(null);
        })
    }
    else {
        database.run('INSERT INTO TUTORIAL (title,description) VALUES (? , ?  , ?)', obj, (err) => {
            if (err) {
            result(err);
            }
            result(null);
        })
    }

}

getAllRows = (result) => {

    database.all('SELECT * FROM TUTORIAL', (err, data) => {
        if (err) {
            result(err, null);
        }
        else {
            result(null, data);
        }
    })
}

getRowById = (req, result) => {

    database.get('SELECT * FROM TUTORIAL WHERE ID = ?', req.params.id, (err, data) => {
        if (err) {
            result(err, null);
            return;
        }
        else {
            result(null, data);
            return;
        }
    })
}

changeRowbyId = (req, result) => {
    arr = [];
    let query = '';
    if (req.body.title != undefined) {
        arr.push(req.body.title);
        query += 'title = ?';
    }
    if (req.body.description != undefined) {
        arr.push(req.body.description);
        if (arr.length != 0) {
            query += ' , ';
        }
        query += 'description = ?';
    }
    if (req.body.published != undefined) {
        arr.push(Number(req.body.published));
        if (arr.length != 0) {
            query += ' , ';
        }
        query += 'published = ?';
    }
    console.log(arr, query);
    database.run(`UPDATE TUTORIAL SET ${query} WHERE ID = ${req.params.id}`, arr, (err) => {
        if (err) {
            result(err);
        }
        else {
            result(null);
        }
    })
}

findAllPublishedRows = (callback) => {

    database.get('SELECT * FROM TUTORIAL WHERE published = true', (err, data) => {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    })
}
deleteAllRows = (callback) => {
    database.run('DELETE FROM TUTORIAL', (err) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null);
        }
    })
}

deleteRowId = ( id , callback ) => {
    database.run( `DELETE FROM TUTORIAL WHERE ID = ${id}` , ( err ) => {
        if( err ) {
            callback(err) ;
        }
        else{
            callback( null ) ;
        }
    } )
}
module.exports = { createRow, getAllRows, getRowById, changeRowbyId, findAllPublishedRows, deleteAllRows , deleteRowId};
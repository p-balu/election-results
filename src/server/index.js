const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Balu$232530',
    database: 'sys',
    multipleStatements: true
});
connection.connect(err => {
    if (err) {
        return err;
    }
    else {
        console.log("connection success")
    }
});
//for allowing cross orgin
app.use(cors());
//for election server running
app.get('/', (req, res) => {
    res.send('hello form Elections server')
});
//overview of 2020 elections of states

app.post('/party', (req, res) => {
    let state = req.query.state;
    connection.query('SELECT * FROM party WHERE state = ?', [state], function (error, results, fields) {
        console.log(results.length);
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            console.log(results.length);
            if (results.length > 0) {
                res.send({
                    "code": 200,
                    data: results,
                })
            }
            else {
                res.send({
                    "code": 206,
                    "success": " Not found"
                });
            }

        }
    });
})
//for 2020 election results
app.post('/election', (req, res) => {
    const state = req.query.state;
    const constituency = req.query.constituency;
    connection.query('SELECT * FROM election WHERE state = ? AND constituency = ?', [state, constituency], function (error, results, fields) {
        console.log(results.length);
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            console.log(results.length);
            if (results.length > 0) {
                res.send({
                    "code": 200,
                    data: results,
                })
            }
            else {
                res.send({
                    "code": 206,
                    "success": " Not found"
                });
            }

        }
    });
})
//for trends
app.post('/trends', (req, res) => {
    let state = req.query.state;
    connection.query('SELECT * FROM trends WHERE state = ? ', [state], function (error, results, fields) {
        console.log(results.length);
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            console.log(results.length);
            if (results.length > 0) {
                res.send({
                    "code": 200,
                    data: results,
                })
            }
            else {
                res.send({
                    "code": 206,
                    "success": " Not found"
                });
            }

        }
    });
})
/// Search input serach in react
app.get('/trends', (req, res) => {
    let constituency = req.query.constituency;
    connection.query('SELECT * FROM trends WHERE constituency = ? ', [constituency], function (error, results, fields) {
        console.log(results.length);
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            console.log(results.length);
            if (results.length > 0) {
                res.send({
                    "code": 200,
                    data: results,
                })
            }
            else {
                res.send({
                    "code": 206,
                    "success": " Not found"
                });
            }

        }
    });
})

app.listen(4000, () => {
    console.log("server is working in port 4000");
});
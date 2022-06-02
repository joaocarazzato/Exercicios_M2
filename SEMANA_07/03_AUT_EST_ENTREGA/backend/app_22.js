const express = require('express'); 
const app = express();
const cors = require('cors')

const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'dbCurriculo.db';
var http = require('http');

const hostname = '127.0.0.1';
const port = 3003;
app.use(express.static("../frontend/"));
app.use(express.json());
app.use(cors())

var db = new sqlite3.Database(DBPATH);
app.get('/', (req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/html');
  var db = new sqlite3.Database(DBPATH);
  var sql = ('SELECT * FROM user WHERE id=1');
  db.get(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
	  res.json(row);
   });
});

/* Read */
app.get('/user', (req, res) => {
  res.statusCode = 200;
  var db = new sqlite3.Database(DBPATH);
  var sql = ('SELECT * FROM user');
  res.setHeader('Access-Control-Allow-Origin', '*');
  db.all(sql, (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row);
	  res.send(row);
   });
});

/* Create */
app.post('/userCreate', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var sql = ('INSERT INTO user (id, name, age) VALUES (10, "Arthur", 25)')
  db.run(sql, (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row);
    res.json(row);
  })
})

/* Update */

app.post('/userUpdate', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var sql = ('UPDATE user SET name = "Arthur Baldo" WHERE id = 10')
  db.run(sql, (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row)
  })
})

/* Delete */

app.post('/userDelete', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var sql = ('DELETE FROM user WHERE id = 10')
  db.run(sql, (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row)
  })
})


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
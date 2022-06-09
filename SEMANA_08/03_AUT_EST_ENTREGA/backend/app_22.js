const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}));
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
  var sql = ('SELECT * FROM contact');
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
  console.log(req.body)
  var sql = (`INSERT INTO contact (name, question) VALUES ("${req.body.name}", "${req.body.question}")`)
  db.run(sql, [], (err, row) => {
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
  var sql = (`UPDATE contact SET question = "${req.body.question}" WHERE name = "${req.body.name}"`)
  db.run(sql, [], (err, row) => {
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
  var sql = (`DELETE FROM contact WHERE name = "${req.body.name}"`)
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
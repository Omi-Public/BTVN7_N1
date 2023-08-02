const {connection} = require('./db.js');
const cors = require('cors');
const md5 = require('md5');
const express = require('express');
var app = express();
const jwt = require('jsonwebtoken');
const SECRETE_KEY = "commercial_website"

app.use(cors());

app.get('/', function (req, res) {
   res.send('Hello World');
});

/** Middleware authen token */
function authenToken(req, res, next){
  const authorizationHeader = req.headers['authorization'];
  if (!authorizationHeader) 
    res.sendStatus(403);

  const token = authorizationHeader.split(' ')[1];
  if (!token){
    res.sendStatus(401);
  }

  jwt.verify(token, SECRETE_KEY, (error, data)=> {
    if (error) res.sendStatus(403);
    else next();
  })
}

/** GET user information by username and password */
app.get('/products', authenToken, async function (req, res){
  connection.query('SELECT * FROM tbl_products;', [], function (error, results, fields) {
    if (results && results.length > 0)
      res.json(results);
    else
      res.json([]);
  })
})

/** GET login */
app.get('/login', async function (req, res){
  const username = req.query.username;
  const password = md5(req.query.password);
  console.log(password);

  let payload = {username: username}
  
  connection.query('SELECT * FROM tbl_user WHERE username=? AND password=?',[username, password], function (error, results, fields) {
    // return Json Web Token if found user
    if (results && results.length > 0) {
      const accessToken = jwt.sign(payload, SECRETE_KEY, { expiresIn: '3600s' })
      return res.json({accessToken});
    } 
    else {
      res.statusCode = 403;
      res.json({
        result: "Không tìm thấy user"
      });
    }
  })
})

/** POST register user */
app.post('/register', authenToken, async function (req, res){
  const username = req.query.username;
  const password = md5(req.query.password);
  const age = req.query.age;
  const country = req.query.country;
  const date_of_birth = req.query.date_of_birth;
  
  console.log(req.query);
  connection.query('INSERT INTO tbl_user(`username`, `password`, `age`, `country`, `date_of_birth`) values(?, ?, ?, ?, ?)',
    [username, password, age, country, date_of_birth],
    function (error, results, fields) {
      res.send(results);
    }
  );
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", 'localhost', port)
})
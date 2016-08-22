'use strict';

var persons = require('./persons.json');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('./'))

app.get('/main', function(req, res){
    res.send(persons);
});

// I have decided to delete the item only on the frontend, not permanently from persons.json. Could have modified employee status
// to be false, but non employees are also part of the list and get printed on frontend according to mockup. In the specification
// though the element was required to be removed from the appearing list. Thus I only deleted on frontend until reload.

app.delete('/main/:name', function(req, res){
  var item = {
      name: req.params.name
    };
    res.send(item);
});

app.post('/main', function(req, res){
  var item = {
      name: req.params.name,
      job: req.params.job,
      age: req.params.age,
      nickname: req.params.nick,
      employee: req.params.employee
    };
    res.send(item);
});

app.listen(3000);

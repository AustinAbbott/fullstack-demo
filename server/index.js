const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const db = require('./db/queries.js');

app.use(bodyParser.json());

app.get('/', function(req, res) {
    db.returnAll()
    .then(results => res.send(results))
});

app.post('/', function(req, res) {
    db.addBugReport(req.body)
    .then(res.send("It worked!"))
})

app.listen(port, () => 
console.log(`Listening on port ${port}`),
);
let bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const pets = require('./pets/pets-router');
app.use('/pets', pets);

// Export your Express configuration so that it can be consumed by the Lambda
// handler
module.exports = app

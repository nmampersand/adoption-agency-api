const express = require('express');
const router = express.Router();
const { PETS_TABLE_NAME } = require('../config');
const DynamoClient = require('../lib/dynamo-client');
const PetService = require('./pets-service');
const service = new PetService(new DynamoClient(PETS_TABLE_NAME));
const Responder = require('../util/responder');

router.get('/', (req, res) => {
    service.getAllPets(req, new Responder(res));
});

router.post('/', function (req, res) {
    service.addPet(req, new Responder(res));
});

module.exports = router;
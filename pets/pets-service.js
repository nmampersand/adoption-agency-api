const uuid = require('uuid/v1');

module.exports = class PetService {
    constructor(dynamoClient) {
        this.dynamo = dynamoClient;
    }

    async getAllPets(req, res) {
        try {
            const results = await this.dynamo.get();
            res.send(200, results.Items);
        } catch(err) {
            res.send(err.statusCode, err);
        }
    }

    async addPet(req, res) {
        try {
            const { name, species, color, description, age } = req.body;
            const pet = {
                PetId: uuid(),
                Name: name,
                Species: species,
                Color: color,
                Description: description,
                Age: age,
                Adopted: false
            }
            await this.dynamo.post(pet);
            res.send(201);
        } catch(err) {
            res.send(err.statusCode, err);
        }
    }
}
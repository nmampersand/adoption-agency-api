const AWS = require('aws-sdk');
const { AWS_REGION } = require('../config');
const docClient = new AWS.DynamoDB.DocumentClient({
    region: AWS_REGION
});

module.exports = class DynamoClient {

    constructor(tableName) {
        this.tableName = tableName;
    }

    get() {
        return docClient.scan({TableName: this.tableName}).promise();
    }

    post(item) {
        return docClient.put({
            TableName: this.tableName,
            Item: item,
        }).promise();
    }
}
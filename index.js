'use strict';

require('dotenv').config();
const app = require('./app')

const env = process.env.NODE_ENV;
if (env === 'dev') {
    app.listen(3000, () => console.log(`Listening on port 3000`));
} else {
    const awsServerlessExpress = require('aws-serverless-express')
    const server = awsServerlessExpress.createServer(app)

    exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
}
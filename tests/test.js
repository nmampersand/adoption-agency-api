'use strict';

const supertest = require('supertest');
const test = require('unit.js');
const app = require('../app.js');
const sinon = require('sinon');
const AWS = require('aws-sdk');

const request = supertest(app);
const sandbox = sinon.createSandbox();

describe('Tests app', function () {

    afterEach(() => {
        sandbox.restore();
    });

    it('verifies get', function (done) {
        const mockArray = [{
            Name: 'Rufus'
        }]
        const returnValueMock = {
            promise() {
                return { Items: mockArray };
            },
        }
        sandbox.stub(AWS.DynamoDB.DocumentClient.prototype, 'scan').returns(returnValueMock);
        request
            .get('/pets')
            .expect(200)
            .end(function (err, result) {
                test
                    .array(result.body)
                    .is(mockArray)
                test
                    .value(result)
                    .hasHeader('content-type', 'application/json; charset=utf-8');
                done(err);
            });
    });
    it('verifies post', function (done) {
        const returnValueMock = {
            promise() {
                return;
            },
        }
        sandbox.stub(AWS.DynamoDB.DocumentClient.prototype, 'put').returns(returnValueMock);
        request
            .post('/pets')
            .expect(201)
            .end((err) => {
                done(err);
            });
    });
});

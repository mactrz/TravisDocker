const expect = require('chai').expect
const chai = require('chai');
const server = require('../index');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('test', () => {
    it('should get', () => {
        chai.request(server)
        .get('/')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res.text).to.equal("Hello from node app!");
        });
    });
});

describe('test', () => {
    it('test', () => {
        chai.request(server)
        .get('/')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.be.status(200);
        });
    });
});

describe('test delete', () => {
    it('should respond with a message', () => {
        chai.request(server)
        .delete('/')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res.text).to.equal('Hello from delete!');
        });
    });
});

describe('test post', () => {
    it('should respond with a message', () => {
        chai.request(server)
        .post('/')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res.text).to.equal('Hello from post!');
        });
    });
});

describe('test put', () => {
    it('should respond with a message', () => {
        chai.request(server)
        .put('/')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res.text).to.equal('Hello from put!');
        });
    });
});
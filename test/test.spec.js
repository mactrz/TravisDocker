const expect = require('chai').expect
const chai = require('chai');
const server = require('../index');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('test_api', () => {​​
  it('should be ok', () => {​​
    chai.request(server)
    .get('/')
    .end(function (err, res) {​​
       expect(err).to.be.null;
       expect(res).to.have.status(200);
    }​​);
  }​​)
}​​)
const superagent = require('superagent');
const expect = require('chai').expect;

let host = 'http://localhost:3000';
let urlAPI = '/api/generate/'

describe('API generate --> /api/generate/', function() {

  let app = require('../src/app.js');
  let instance;

  before(function() {
    instance = app.listen(3000);
  });
  after(function() {
    instance.close();
  });

  describe('GET', function() {
    it(`GIVEN ${urlAPI}
        WHEN send GET request
        THEN should return`, function(done) {
      superagent.get(`${host}${urlAPI}`)
        .end(function(e, res) {
          expect(res.status).to.eql(200)
          done()
        })
    })
  })

})

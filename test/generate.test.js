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
        THEN should return 200`, function(done) {
      superagent.get(`${host}${urlAPI}`)
        .end(function(e, res) {
          expect(res.status).to.eql(200)
          done()
        })
    })
  })

  describe.skip('GET', function() {
    it(`GIVEN ${urlAPI} with parameters ext=asciidoc and template=basic
       WHEN send GET request THEN should return the gitignore
        write in asciicode for a basic project`, function(done) {
      superagent.get(`${host}${urlAPI}?ext=asciidoc&template=basic`)
        .end(function(e, res) {
          expect(res.status).to.eql(200)
          done()
        })
    })
  })

})

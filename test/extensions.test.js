const superagent = require('superagent');
const expect = require('chai').expect;

let host = 'http://localhost:3000';
let urlAPI = '/'

describe('Project Root --> /', function() {

  let app = require('../src/app.js');
  let instance;

  before(function() {
    instance = app.listen(3000);
  });
  after(function() {
    instance.close();
  });

  describe.skip('GET', function() {
    it(`GIVEN ${urlAPI}
        WHEN send GET request
        THEN should return 'Hello Ynov'`, function(done) {
      superagent.get(`${host}${urlAPI}`)
        .end(function(e, res) {
          expect(res.status).to.eql(200)
          expect(res.text).to.equal("{['asciidoc','txt','markdown']}")
          done()
        })
    })
  })

})

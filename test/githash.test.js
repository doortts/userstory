// async test
// githash.test.js

var assert = require('assert'), 
    should = require('should'),
    git = require('./githash');


describe('GIT FILESYSTEM:', function(){
  describe('hashValue()', function(){
    it('"hello.txt" file should be 37706c351c7afbb4b0e1cb58ff7440294060dd76', function(done){
      var targetFile = "hello.txt";
      var expectedSHA1 = "37706c351c7afbb4b0e1cb58ff7440294060dd76";
      git.hashValue(targetFile, function(data){
        assert.equal(data, expectedSHA1);
        done();
      });
    })
  })
})
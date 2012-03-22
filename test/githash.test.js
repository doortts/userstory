// async test
// githash.test.js

var assert = require('assert'), 
    should = require('should'),
    git = require('./githash2'),
    step = require('step');


// describe('githash.js:', function(){
//   describe('hashValue()', function(){
//     it('"hello.txt" file should be 37706c351c7afbb4b0e1cb58ff7440294060dd76', function(done){
//       var targetFile = "hello.txt";
//       var expectedSHA1 = "37706c351c7afbb4b0e1cb58ff7440294060dd76";
//       git.hashValue(targetFile, function(data){
//         assert.equal(data, expectedSHA1);
//         done();
//       });
//     })
//   })
// })

var a = function(name, cb){
	console.log('entering a');
	cb( "<" + name + ">");
}


	// 테스트 스위트(Test Suite) 만들기
suite('GIT FILESYSTEM:', function () {
    test('hashValue()', function (done) {
        // Given
        var targetFile = "hello.txt";
        var expectedSHA1 = "37706c351c7afbb4b0e1cb58ff7440294060dd76";

        // When 
        // Then
        git.hashValue(targetFile, function(data){
			assert.equal(data, expectedSHA1);
			done();
        });
    }),
    test('hashValue()', function () {
        // Given
        var targetFile = "hello.txt";
        var expectedSHA1 = "37706c351c7afbb4b0e1cb58ff7440294060dd76-";

        step(
        	function when(){
        		git.hashValue(targetFile);
        	},
        	function then(data){
				console.log(data);
				assert.equal('2', '1');
        	}
        );
    });
});
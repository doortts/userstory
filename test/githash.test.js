// async test
// githash.test.js

var assert = require('assert'), 
    should = require('should'),
    git = require('./githash2'),
    step = require('step');

//   describe('hashValue()', function(){
//     it('"hello.txt" file should be 37706c351c7afbb4b0e1cb58ff7440294060dd76', function(done){
//       var targetFile = "hello.txt";
//       var expectedSHA1 = "37706c351c7afbb4b0e1cb58ff7440294060dd76";
//       git.hashValue(targetFile, function(data){
//         data.should.equal(expectedSHA1);
//         done();
//       });
//     })
//   })

// 테스트 스위트(Test Suite) 만들기
suite('git.hashValue()', function () {
    test('hello.txt file git hashValue', function (done) {
        // Given
        var targetFile = "hello.txt";
        var expectedSHA1 = "37706c351c7afbb4b0e1cb58ff7440294060dd76";

        // When 
        git.hashValue(targetFile, function(data){
        	// Then
			assert.equal(data, expectedSHA1);
			done();
        });
    }),
    test('hello.txt file git hashValue #2', function (done) {
    	var f = {};

       	step(
       		function given(){
       			f.targetFile = "hello.txt";
				f.expectedSHA1 = "37706c351c7afbb4b0e1cb58ff7440294060dd76";
				ready();
       		},
        	function when(){
        		git.hashValue(f.targetFile, this);
        	},
        	function then(data){
        		assert.equal(data, f.expectedSHA1);
        		done();
        	}
        );
    }),
    test('sync test', function () {
    	//given
    	var target = ["a", "b"];
		
		//when
		var leftHand = target.shift();

		//then
		assert.equal(leftHand, "a");
    })
});
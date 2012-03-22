// division-by-zero-test.js

var assert = require('assert'), 
    should = require('should'),
    git = require('./githash');

// 테스트 스위트(Test Suite) 만들기
    test('git blob hash value creation', function () {
        // Given
        var targetFile = "hello.txt";
        var expectedSHA1 = "37706c351c7afbb4b0e1cb58ff7440294060dd76";

        // When 
        // Then
        assert.equal(git.hashValue(targetFile), expectedSHA1);
    })
});


// division-by-zero-test.js

var assert = require('assert'), 
    should = require('should');


var divide = function(a, b){
    return (a/b);
}


// 테스트 스위트(Test Suite) 만들기
suite('숫자 연산=>', function () {
    test('숫자를 영으로 나누면 무한대가 나온다', function () {
        // Given
        var expected = Infinity;

        // When
        var actual = divide(10, 0);

        // Then
        assert.equal(actual, expected);     
    }),
    suite('하지만 0을 0으로 나누면 =>', function () {
        // When
        var actual = divide(0,0);
        test('숫자가 아니다.', function(){

            // Then
            isNaN(actual).should.equal(true);
        }),
        test('자기 자신과도 같지 않다.', function(){

            // Then
            assert.notEqual(actual, actual);
        })
    });
     
});


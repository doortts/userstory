var assert = require('assert'),
    cart = require('./cart.js');


suite('cart', function () {
    test('buy one book', function () {
        // Arrange
        var input = [1, 0, 0, 0, 0],
            expected = 8;

        // Act
        var actual = cart.GetTotalSum(input);

        // Assert
        assert.equal(actual, expected);     
    });
});
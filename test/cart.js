var GetTotalSum = function (input) {
    var total = 0,
        differentTitles = 0,
        discountMap = [0, 1, 0.95, 0.9, 0.8, 0.75],
        BOOK_PRICE = 8;

    for (var i in input) {
        total += input[i] * BOOK_PRICE;
        if (input[i] > 0) {
            differentTitles++;
        }
    }

    if (differentTitles > 1) {
        total = total * discountMap[differentTitles];
    }

    return total;
}


module.exports.GetTotalSum = GetTotalSum;
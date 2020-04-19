const sum = require('./sum')
var $ = require('./jquery-3.3.1.min')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})
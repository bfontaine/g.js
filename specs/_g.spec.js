var g    = require('../g'),
    s    = [],
    to_a = function(e) {
        s.push(e);
    };

describe('Number suit', function() {
    beforeEach(function() {
        s.length = 0;
    });

    it('should be empty', function() {
        g.from(0).to(0).do(to_a);
        expect(s).toEqual([]);
    });
});

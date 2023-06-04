function deepComp(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (a == null || b == null) {
        return false;
    }
    if (typeof a !== 'object') {
        if (Number.isNaN(a) && Number.isNaN(b)) {
            return true;
        }
        return a === b;
    }
    if (Array.isArray(a)) {
        if (!Array.isArray(b) || a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            if (!deepComp(a[i], b[i])) {
                return false;
            }
        }
        return true;
    } else {
        let aKeys = Object.keys(a);
        let bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        for (let i = 0; i < aKeys.length; i++) {
            let prop = aKeys[i];
            if (!(b.hasOwnProperty(prop) && deepComp(a[prop], b[prop]))) {
                return false;
            }
        }
        return true;
    }
}


describe("deepComp", function () {
    var H1 = {a: 5, b: {b1: 6, b2: 7}};
    var H2 = {b: {b1: 6, b2: 7}, a: 5};
    var H3 = {a: 5, b: {b1: 6}};
    var H4 = {a: 5, b: {b1: 66, b2: 7}};
    var H5 = {a: 5, b: {b1: 6, b2: 7, b3: 8}};
    var H6 = {a: null, b: undefined, c: Number.NaN};
    var H7 = {c: Number.NaN, b: undefined, a: null};
    var H8 = {a: 5, b: 6};
    var H9 = {c: 5, d: 6};
    var H10 = {a: 5};
    var A1 = [5, 7];
    var A2 = [5, 5, 7];
    var A3 = [5, 8, 7];
    it("deepComp", function () {
        assert.equal(deepComp(H1, H2), true)
        assert.equal(deepComp(H1, H3), false)
        assert.equal(deepComp(H1, H4), false)
        assert.equal(deepComp(H1, H5), false)
        assert.equal(deepComp(H6, H7), true)
        assert.equal(deepComp(H8, H9), false)
        assert.equal(deepComp(H8, H10), false)
        assert.equal(deepComp(null, H10), false)
        assert.equal(deepComp(H10, null), false)
        assert.equal(deepComp(null, null), true)
        assert.equal(deepComp(null, undefined), false)
        assert.equal(deepComp(5, "5"), false)
        assert.equal(deepComp(5, H1), false)
        assert.equal(deepComp(A1, H1), false)
        assert.equal(deepComp(A2, A3), false)
        assert.equal(deepComp({a: 5, b: undefined}, {a: 5, c: undefined}), false)
        assert.equal(deepComp([5, 7], {0: 5, 1: 7}), false)
        assert.equal(deepComp([5, 7], {0: 5, 1: 7, length: 2}), false)
        assert.equal(deepComp("aaa", "bbb"), false)
        assert.equal(deepComp(Number.NaN, Number.NaN), true)


    })

});

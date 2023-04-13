function deepComp(value1, value2) {
    if (typeof value1 !== 'object' || value1 === null || typeof value2 !== 'object' || value2 === null) {
        return value1 === value2;
    }

    if (Array.isArray(value1) !== Array.isArray(value2)) {
        return false;
    }

    const keys1 = Object.keys(value1).sort();
    const keys2 = Object.keys(value2).sort();

    if (keys1.length !== keys2.length || !keys1.every((key, i) => key === keys2[i])) {
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (!deepComp(value1[key], value2[key])) {
            return false;
        }
    }

    return true;
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

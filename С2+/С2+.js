function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    if (Array.isArray(obj)) {
        let copy = []
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i])
        }
        return copy
    }

    if (typeof obj === 'object') {
        let copy = {}
        for (key in obj) {
            copy[key] = deepCopy(obj[key])
        }
        return copy
    }

}

describe("deepCopy", function () {
    var h1 = {a: 5, b: {b1: 6, b2: 7}, c: [33, 22], d: null, e: undefined, f: Number.NaN};
    var h2 = deepCopy(h1);
    it("{ a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN }", function () {
        assert.equal(h1 === h2, false)
        assert.equal(h1.a === h2.a, true)
        assert.equal(h1.b === h2.b, false)
        assert.equal(h1.b.b1 === h2.b.b1, true)
        assert.equal(h1.c === h2.c, false)
        assert.equal(h1.c[0] === h2.c[0], true)
        assert.equal(h1.d === h2.d, true)
        assert.equal(h1.e === h2.e, true)
        assert.equal(isNaN(h2.f), true)
        assert.equal(h2.c instanceof Array, true)
    });
    var a1 = [5, {b1: 6, b2: 7}, [33, 22], null, undefined, Number.NaN];
    var a2 = deepCopy(a1);
    it("[ 5, {b1:6,b2:7}, [33,22], null, undefined, Number.NaN];", function () {
        assert.equal(a1 === a2, false)
        assert.equal(typeof (a2) === typeof (a1), true)
        assert.equal(a1[0] === a2[0], true)
        assert.equal(a1[1] === a2[1], false)
        assert.equal(a1[1].b1 === a2[1].b1, true)
        assert.equal(a1[2] === a2[2], false)
        assert.equal(a1[2][0] === a2[2][0], true)
        assert.equal(a1[3] === a2[3], true)
        assert.equal(a1[4] === a2[4], true)
        assert.equal(isNaN(a2[5]), true)
        assert.equal(a2[2] instanceof Array, true)
    });
    var v1 = "sss";
    var v2 = deepCopy(v1);

    it("sss", function () {
        assert.equal(typeof (v2) === typeof (v1), true)
        assert.equal(v1 === v2, true)

    })
    var z1 = null;
    var z2 = deepCopy(z1);
    it("null", function () {
        assert.equal(typeof (z2) === typeof (z1), true)
        assert.equal(z1 === z2, true)

    })
    var n1 = Number.NaN;
    var n2 = deepCopy(n1);
    it("Number.NaN", function () {
        assert.equal(typeof (n2) === typeof (n1), true)
        assert.equal(isNaN(n2), true)

    })


});

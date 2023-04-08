function HashStorageFunc() {
    let myObject = {}

    this.addValue = function (key, value) {
        myObject[`${key}`] = value
        console.log(myObject)
        return this;
    }
    this.getValue = function (key) {
        console.log(myObject[key])
        return myObject[key];
    }
    this.deleteValue = function (key) {
        if (key in myObject) {
            delete myObject[key];
            return true;
        }
        return false;
    };
    this.getKeys = function () {
        console.log(Object.keys(myObject))
        return Object.keys(myObject);
    }
}

const hashStorageFunc = new HashStorageFunc();
let forTest = {
    name: "forTest"
}
hashStorageFunc.addValue(Object.keys(forTest)[0], forTest.name)
hashStorageFunc.getValue(Object.keys(forTest)[0])
hashStorageFunc.getKeys()
console.log(hashStorageFunc.deleteValue(Object.keys(forTest)[0]))

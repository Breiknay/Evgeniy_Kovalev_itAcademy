let str = prompt('Введите строку')

function isPalindrom(str) {
    let newStr = str.replace(/[.,\sёЁЪъЬь]/g, "").toLowerCase();
    return newStr === newStr.split("").reverse().join("");
}

let result = isPalindrom(str)
alert(result ? "это палиндром" : "это не палиндром")
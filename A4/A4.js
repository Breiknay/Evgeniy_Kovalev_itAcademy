let str = prompt('Введите строку')

function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[.,\s]/g, "");
    str = str.replace(/ё/g, 'е');
    if (str.length <= 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1));
    } else {
        return false;
    }
}

let result = isPalindrome(str)
alert(result ? "Это палиндром" : "Это не палиндром")
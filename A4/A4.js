let str = prompt('Введите строку')

function isPalindrome(str) {

    function checkPalindrome(str) {
        if (str.length <= 1) {
            return true;
        }
        if (str[0] !== str[str.length - 1]) {
            return false;
        }
        return checkPalindrome(str.slice(1, str.length - 1));
    }

    const cleanedStr = removeIgnoredChars(str);

    return checkPalindrome(cleanedStr);
}

function removeIgnoredChars(str) {
    str = str.toLowerCase()
    const unnecessaryText = /[\s,.?!:;'"()—`´ьЬ]/g;
    str = str.replace(/ё/g, 'е');
    return str.replace(unnecessaryText, '');
}

let result = isPalindrome(str)
alert(result ? "Это палиндром" : "Это не палиндром")
let str = prompt('Введите строку')

function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[.,\s]/g, "");
    str = str.replace(/ё/g, 'е');

    for (let i = 1; i < Math.floor(str.length / 2); i++) {

        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }

    }
    return true;
}

let result = isPalindrome(str)
alert(result ? "Это палиндром" : "Это не палиндром")




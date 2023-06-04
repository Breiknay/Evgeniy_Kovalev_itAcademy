function countingVowels(str) {
    const vowelsToCheck = 'аеёиоуыэюя';
    const count = str.toLowerCase().split('').reduce((count, char) => {
        if (vowelsToCheck.includes(char)) {
            return count + 1;
        } else {
            return count;
        }
    }, 0);

    return count;

}

let textInput = prompt("Введите строку:");
let vowelCount = countingVowels(textInput)
console.log(`Количество  гласных букв в строке:  + ${vowelCount}`);


function countingVowels(str) {
    const vowelsToCheck = 'аеёиоуыэюя';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelsToCheck.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

let textInput = prompt("Введите строку:");
let vowelCount = countingVowels(textInput)
console.log(`Количество  гласных букв в строке:  + ${vowelCount}`);
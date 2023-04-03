function countingVowels(str) {
    const vowelsToCheck = 'аеёиоуыэюя';
    let count = 0;

    str.toLowerCase().split('').forEach((item) => {
        if (vowelsToCheck.split('').includes(item)) {
            count++
        }
    })
    return count;
}

let textInput = prompt("Введите строку:");
let vowelCount = countingVowels(textInput)
console.log(`Количество  гласных букв в строке:  + ${vowelCount}`);


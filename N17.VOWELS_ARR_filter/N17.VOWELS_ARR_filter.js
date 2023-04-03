function countingVowels(str) {
    const vowelsToCheck = 'аеёиоуыэюя';
    let arrVowels = vowelsToCheck.split('')
    let filterArray = str.toLowerCase().split('').filter((item) => {
        return arrVowels.includes(item)
    });
    return filterArray.length;
}

let textInput = prompt("Введите строку:");
let vowelCount = countingVowels(textInput)
console.log(`Количество  гласных букв в строке:  + ${vowelCount}`);


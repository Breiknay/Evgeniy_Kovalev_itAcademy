// function countRussianVowels(str) {
//     const vowels = 'аеёиоуыэюя';
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
// }
// const userInput = prompt("Введите строку:");
// const result = countRussianVowels(userInput);
// console.log(`Количество русских гласных букв в строке: ${result}`);


function countRussianVowels(str) {
    let vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
            count++;
        }
    }
    return count;
}

// Example usage
let userInput = prompt("Введите строку:");
let vowelCount = countRussianVowels(userInput);
console.log("Количество русских гласных букв в строке: " + vowelCount);
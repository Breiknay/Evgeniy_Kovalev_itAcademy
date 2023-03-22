let userInput = prompt("Введите строку:");
let result = `✪${removeSpaces(userInput)}✪`;
alert(result)

function removeSpaces(str) {
    let startIndex = 0;
    let endIndex = str.length - 1;
    while (str[startIndex] === " ") {
        startIndex++;
    }
    while (str[endIndex] === " ") {
        endIndex--;
    }

    return userInput.substring(startIndex, endIndex + 1);

}

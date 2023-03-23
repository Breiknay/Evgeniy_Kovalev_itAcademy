let userInput = prompt("Введите строку:");
let result = `✪${removeSpaces(userInput)}✪`;
alert(result)

function removeSpaces(str) {
    let startIndex = 0;
    let endIndex = str.length - 1;
    while (str[startIndex] === " ") {
        startIndex++;
    }
    if (startIndex === str.length) {
        console.log("Only spaces in the string.");
        return ""
    }
    while (str[endIndex] === " ") {
        endIndex--;
    }
    if (startIndex === 0 && endIndex === str.length - 1) {
        console.log("No spaces found in the string.");
        return str;
    } else return str.substring(startIndex, endIndex + 1)

}

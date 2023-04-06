function formatNumber(num, format) {
    const [beforeDecimal, afterDecimal] = format.split(".");
console.log(afterDecimal)
    const numStr = num.toFixed(afterDecimal ? afterDecimal.length : 0);
    const [numInt, numDec] = numStr.split(".");
    let formattedNum = "";
    let index = beforeDecimal.length - 1;
    for (let i = numInt.length - 1; i >= 0; i--) {
        formattedNum = (index >= 0 && beforeDecimal[index] === "#" ? numInt[i] : beforeDecimal[index]) + formattedNum;
        index--;
    }
    if (afterDecimal) {
        formattedNum += ".";
        for (let i = 0; i < afterDecimal.length; i++) {
            formattedNum += (i < numDec.length ? numDec[i] : "0");
        }
    }
    return formattedNum;
}
console.log(formatNumber(2.3, "# ### ###.##")); // выдаёт "2.30"
console.log(formatNumber(12345.368, "# ### ###.##")); // выдаёт "12 345.37"
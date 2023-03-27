function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    const usedColors = {};

    console.log('цветов: ' + colorsCount);
    for (let i = 1; i <= colorsCount; i++) {
        const colorName = getRandomColor(colors, usedColors);
        usedColors[colorName] = true;
        console.log(colorName);
    }
}

function getRandomColor(colors, usedColors) {
    let n = randomDiap(1, 7);
    let colorName = colors[n];
    while (colorName in usedColors) {
        n = randomDiap(1, 7);
        colorName = colors[n];
    }
    return colorName;
}

mood(3);
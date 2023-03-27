function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];

    console.log('цветов: ' + colorsCount);
    const usedColors = {};
    for (let i = 1; i <= colorsCount; i++) {
        let n = randomDiap(1, 7);
        let colorName = colors[n];
        while (colorName in usedColors) {
            n = randomDiap(1, 7);
            colorName = colors[n];
        }
        usedColors[colorName] = true;
        console.log(colorName);
    }
}

mood(3);
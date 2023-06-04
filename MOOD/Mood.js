function mood(colorsCount) {
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    const usedColors = {};
    console.log(`цветов: ${colorsCount}`);
    for (let i = 1; i <= colorsCount; i++) {
        const n = randomDiap(1, 7);
        let colorName;
        do {
            colorName = colors[randomDiap(1, 7)];
        } while (colorName in usedColors);
        usedColors[colorName] = true;
        console.log(colorName);
    }
}

function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

mood(3);
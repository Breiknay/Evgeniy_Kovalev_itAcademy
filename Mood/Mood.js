function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    const usedColors = [];

    console.log('цветов: ' + colorsCount);
    while (usedColors.length < colorsCount) {
        const n = randomDiap(1, 7);
        const colorName = colors[n];
        if (!usedColors.includes(colorName)) {
            usedColors.push(colorName);
        }
    }

    console.log(usedColors.join("\n"))
}

mood(3);
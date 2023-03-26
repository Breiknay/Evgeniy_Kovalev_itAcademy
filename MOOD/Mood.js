function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];

    console.log('цветов: ' + colorsCount);
    for (let i = 1; i <= colorsCount; i++) {
        const n = randomDiap(1, 7);
        const colorName = colors[n];
        console.log(colorName);
    }
}

mood(3);

// let used={}; // ключ хэша - число, которое уже встречалось
// for ( let i=0; i<values.length; i++ ) {
//     const value=values[i]; // очередное значение
//     if ( value in used ) // встречалось ли оно?
//         continue; // если да - всё, берём следующее
//     used[value]=true; // если нет - запоминаем, что это значение уже встречалось
//     console.log(value); // выводим его в консоль
// }
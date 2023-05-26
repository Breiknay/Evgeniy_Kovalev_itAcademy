"use strict";
let words = ['ТАРА', 'ЛИПА', 'ТУРА', 'ЛУЖА', 'ПАРК', 'ЛОЖЬ', 'ЛУПА', 'ПЛОТ', 'МУРА', 'ПАУК', 'ПАУТ', 'ПЛУТ', 'ЛОЖА', 'СЛОТ', 'ПАРА'];

function findShortestChain(str1, str2) {
    words.push(str2);
    let used = {};
    return findСouple(str1, str2, words).reduce(delimiter)

    function delimiter(first, second) {
        return first + '-' + second;
    }

    function findСouple(str1, str2, words) {
        let wordsCount = {};
        used[str1] = true;
        let word
        for (let i = 0; i < words.length; i++) {
            word = words[i];
            let n = 0;
            for (let k = 0; k < str1.length; k++) if (str1.charAt(k) !== word.charAt(k)) n++;
            wordsCount[word] = n;
        }
        let wordsCountArr = [];
        for (word in wordsCount) wordsCountArr.push({word: word, count: wordsCount[word]});

        function compareFunc(a, b) {
            return a.count - b.count;
        }

        wordsCountArr.sort(compareFunc);

        for (let z = 0; z < words.length; z++) {
            let wordCount = wordsCountArr[z];
            words[z] = wordCount.word;
        }
        let result = words.shift();
        while (str1 !== str2) {
            used[result] = true;
            return findСouple(result, str2, words, used);
        }
        return Object.keys(used);
    }

}

console.log(findShortestChain('ЛИCА', 'ЛОСЬ'))
console.log(findShortestChain('МУХА', 'СЛОН'))
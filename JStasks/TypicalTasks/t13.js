/*
Самое длинное слово

Дана строка:

'Решай, выбирай, получай оферы'

Нужно найти в ней самое длинное слово и если их несколько, то вернуть первое:

// 'выбирай'
*/
const findLongestWord = (str) => {
    let array = str.split(/[\s,]+/);
    let longestWord = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }
    }
    return longestWord;

};

console.log(findLongestWord('Решай, выбирай, получай оферы'));
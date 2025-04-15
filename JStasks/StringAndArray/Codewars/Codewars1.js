function EvenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
console.log(EvenOrOdd(2))

function OppositeNumber(number) {
    return 0 - number;
}
console.log(OppositeNumber(15))

function Abbreviate(string) {
    const splittedString = string.split(' ')
    return splittedString[0].charAt(0).toUpperCase() + '.' + splittedString[1].charAt(0).toUpperCase();
}
console.log(Abbreviate("sam Harris"))

function removeChar(str){
        return str.slice(1,str.length-1);
}
console.log(removeChar("try"));

function args_count(...args) {
    return args.length
}
console.log(args_count(1, 2, 'sd', 4343))

let countSheep = function (num){
    let sheepString = ''
    for (let i = 1; i <= num; i++) {
        sheepString += i.toString() + ' sheep...'
    }
    return sheepString
}
console.log(countSheep(4))

function positiveSum(arr) {
    return arr.reduce((sum, num) => {
        return num > 0 ? sum + num : sum;
    }, 0)
}
console.log(positiveSum([-43, 2, 3, -5]))

function findShort(s){
    let splittedS = s.split(' ')
    let smallest = splittedS[0].length
    splittedS.forEach((word) => {
        if (word.length < smallest) {
            smallest = word.length
        }
    })
    return smallest
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

function filter_list(l) {
    return l.filter((word) => {
        return typeof word === 'number'
    })
}
console.log(filter_list([1,2,'a','b']))

function maps(x){
    return x.map((num) => num * 2)
}
console.log(maps([1,2]))

function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((a, b) => a + b);
}
console.log(arrayPlusArray([1,2,3], [4, 5, 6]))

function squareDigits(num){
    return +num.toString().split('').map((digit) => Number(digit) ** 2).join('')

}
console.log(squareDigits(123))

const arrCheck = value => value.every(Array.isArray)
console.log(arrCheck([[1], [1]]))

function capitalize(s){
    let first = s.split('').map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter).join('')
    let second = s.split('').map((letter, i) => i % 2 !== 0 ? letter.toUpperCase() : letter).join('')
    return [first, second]
}
console.log(capitalize('asdasdad'))

function smartSum(...args){
     return args.reduce((sum, num) => Array.isArray(num) ? sum + smartSum(...num) : sum + num, 0)
}
console.log(smartSum(1, 2, [1, 34]))

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0
    const smileMask = /^[:;][-~]?[)D]$/
    arr.forEach((face) => {
        if (smileMask.test(face)) {
            count++
        }
    })
    return count
}
console.log(countSmileys([':-)', ';~D']))

function sortArray(array) {
    let odd = []
    array.forEach((element, i) => {
        if (element % 2 !== 0) {
            odd.push(element)
        }
    })
    odd.sort((a, b) => a - b)
    array.forEach((element, i) => {
        if (element % 2 !== 0) {
            array[i] = odd.shift()
        }
    })
    return array
}
console.log(sortArray([4, 2, 9, 5, 3, 8, 45 , 36, 38, 17]))

function pluck(objs, name) {
    let result = []
    objs.forEach(obj => {
        result.push(obj[name])
    })
    return result
}
console.log(pluck([{a:2, b:3}, {b:4}], 'a'))

function removeDuplicateWords (s) {
    return Array.from(new Set(s.split(' '))).join(' ')
}
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

function findUnique(numbers) {
    let result = new Set()
    numbers.forEach(number => {
        result.has(number) ? result.delete(number) : result.add(number)
    })
    return [...result][0]
}
console.log(findUnique([1, 2, 3, 1, 3]))


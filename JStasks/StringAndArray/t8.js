/*
Задача: У тебя есть массив объектов, каждый из которых содержит имя и количество товара.
Нужно преобразовать его в объект, где ключами будут имена товаров,
а значениями — их количество.

Input: [
 { name: "Apple", count: 100},
 { name: "Banana", count: 60},
 { name: "Orange", count: 90},
 { name: "Apple", count: 40},
]

Output: {
  "Apple": 140,
  "Banana": 60,
  "Orange": 90
}
*/
const fruits = [
    { name: "Apple", count: 100},
    { name: "Banana", count: 60},
    { name: "Orange", count: 90},
    { name: "Apple", count: 40},
]
function fruitObject(fruits) {
    let result = {}
    for (const fruit of fruits) {
        if (fruit.name in result) {
            result[fruit.name] += fruit.count
        } else {
            result[fruit.name] = fruit.count
        }
    }
    return result
}

console.log(fruitObject(fruits));
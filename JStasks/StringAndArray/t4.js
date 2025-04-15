/*
Задача: сделать из массива объект.
Input: ['meat', 'milk', 'carrot', 'apple', 'water']
Output: {
    "0": "meat",
    "1": "milk",
    "2": "carrot",
    "3": "apple",
    "4": "water"
}
*/
const products = ['meat', 'milk', 'carrot', 'apple', 'water']

const getProductsObject = arr => {
    return Object.assign({}, arr);
}
console.log(getProductsObject(products));
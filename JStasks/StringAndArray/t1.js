/* Посчитай сумму покупок. */

const purchases = [
    { item: 'Laptop', price: 1000 },
    { item: 'Phone', price: 500 },
    { item: 'Headphones', price: 150 },
    { item: 'Keyboard', price: 100 },
];

function countProducts(arr){
    return arr.reduce((sum, {price}) => sum + price, 0)

}
console.log(countProducts(purchases));
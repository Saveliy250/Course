/* Напишите функцию createIdGenerator(),
которая будет генерировать уникальные идентификаторы каждый раз,
когда она вызывается. Используйте замыкание,
чтобы сохранить текущий счётчик идентификаторов.*/

function createIdGenerator() {
    let count = 0;
    function increment() {
        count++;
    }
    function generateId() {
        increment();
        return count;
    }
    return generateId;
}

const generateId = createIdGenerator();
console.log(generateId()); // 1
console.log(generateId()); // 2
console.log(generateId()); // 3
console.log(generateId()); // 4
console.log(generateId()); // 5
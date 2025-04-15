/*
Задача: У тебя есть объект,
в котором хранится информация о пользователях и их возрасте.
Нужно изменить возраст каждого пользователя на 1 год.

Input:{
  user1: { name: "Alice", age: 25 },
  user2: { name: "Bob", age: 30 },
  user3: { name: "Charlie", age: 35 },
}

Output: {
  user1: { name: "Alice", age: 26 },
  user2: { name: "Bob", age: 31 },
  user3: { name: "Charlie", age: 36 },
}
*/

const u = {
    user1: { name: "Alice", age: 25 },
    user2: { name: "Bob", age: 30 },
    user3: { name: "Charlie", age: 35 },
};

const addOneYearForAge = (users) => {
    let arrayU = Object.entries(users);
    arrayU.forEach(([key, user]) => {
        user.age += 1
    })
    return Object.fromEntries(arrayU);
};

console.log(addOneYearForAge(u))
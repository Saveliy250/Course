/*
Задача: сделать из объекта массив с массивами.
Input: {Alex: 22,George: 32}
Output: [[Alex, 22], [George, 32]]
*/

const users = {
    Alex: 22,
    George: 32,
    James: 31,
    Rose: 25,
}

const formatUsers = users => {
    return Object.keys(users).map(key => [key, users[key]]);
}
console.log(formatUsers(users));

// или (загуглил, потому что не верил что нет решения проще)

const formatUsers2 = users => {
    return Object.entries(users);
}
console.log(formatUsers2(users));

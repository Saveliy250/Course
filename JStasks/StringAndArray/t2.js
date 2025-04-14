/* Напиши функцию, которая будет находить нужного пользователя по id
и возвращать его
*/

const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Alice', email: 'alice@example.com' },
    { id: 3, name: 'Bob', email: 'bob@example.com' },
];

function getUserById(id){
    return users.find(user => user.id === id);
}
console.log(getUserById(1));
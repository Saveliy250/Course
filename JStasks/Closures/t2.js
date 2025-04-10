/*
Создайте объект с методами для работы с приватными переменными.
Объект должен иметь метод setName для установки имени и метод getName
для получения имени.
Имя должно быть доступно только через эти методы, а не напрямую.
 */

function createPerson(name) {
    return {
        getName() {
            return name;
        },
        setName(newName) {
            name = newName;
        }
    }
}

const person = createPerson();
person.setName('Alice');
console.log(person.getName()); // Alice
console.log(person.name); // undefined (нельзя напрямую обратиться)


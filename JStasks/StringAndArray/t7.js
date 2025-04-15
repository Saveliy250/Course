/*
Задача: У тебя есть массив объектов с данными о студентах (имя и оценка).
Необходимо отсортировать студентов по оценке и оставить только тех, у кого оценка выше 50.
*/

const students = [
    { name: "Anna", grade: 45 },
    { name: "Ivan", grade: 67 },
    { name: "Maria", grade: 80 },
    { name: "Alex", grade: 52 },
];

function otchisleni(students) {
    return students.filter(student => student.grade > 50).sort(function (a, b) {
        return parseInt(a.grade) > parseInt(b.grade);
    });

}

console.log(otchisleni(students));
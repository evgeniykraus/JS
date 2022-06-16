let myName = prompt("Как тебя зовут?");
let mySecondName = prompt("Напиши свою фамилию!");
let myBirthdYear = prompt("Введите год вашего рождения!");   

let currentYear = 2022;
let age = currentYear - myBirthdYear;

if (age < 20) {
    alert("Привет, " + myName + " " + mySecondName + "!");
}
else if (age >= 20 && age < 40) {
    alert("Добрый день, " + myName + " " + mySecondName + "!");
}
else {
    alert("Здравствуйте, " + myName + " " + mySecondName + "!");
}


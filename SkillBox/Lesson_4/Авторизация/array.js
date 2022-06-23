
let users = [
    {
        first_name: "Алексей",
        login: "alex",
        password: "qwe123"
    },
    {
        first_name: "Иван",
        login: "ivan",
        password: "qwe123"
    },
    {
        first_name: "Петр",
        login: "peter",
        password: "qwe123"
    },
    {
        first_name: "Семен",
        login: "semen",
        password: "qwe123"
    },
    {
        first_name: "Анна",
        login: "anna",
        password: "qwe123"
    }
];
let login = prompt("Введите логин:");
let password = prompt("Введите пароль:");
let user = null;

for (let i = 0; i < users.length; i++) {
    if (users[i].login == login && users[i].password == password) {
        user = users[i].first_name;
    }
}

if (user != null) {
    alert("Привет, " + user + "!");
} else {
    alert("Неправильный логин или пароль!");
}
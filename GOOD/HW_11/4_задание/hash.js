function get_hash(password, numeral_system) {
    let sum = 0;
    for (let i = 0; i < password.length; i++) {
        sum += password.charCodeAt(i);
    }
    return (sum % 256).toString(numeral_system).toUpperCase();
}

function test_login() {
    let login = prompt("Введите логин:");
    if (login == null) {
        throw "stop";
    }
    if (/[a-zA-Z1-9]/.test(login) === false) {
        alert('В логине должны быть только латинские ');
        throw "stop";
    }
    if (login.length < 3 || login.length > 20) {
        alert('В логине должен быть от 3 до 20 символов');
        throw "stop";
    }
    if (parseInt(login.substr(0, 1))) {
        alert('Логин должен начинаться с буквы');
        throw "stop";
    }
    return login.trim();
}

function test_password() {
    let password = prompt("Введите пароль:");
    if (password == null) {
        throw "stop";
    }
    if (/[a-zA-Z1-9]/.test(password) === false) {
        alert('В пароле должны быть только латинские буквы');
        throw "stop";
    }
    if (password.length < 2) {
        alert('Пароль должен содержать от 2 символов');
        throw "stop";
    }

    return get_hash(password, 16);
}

function signUp() {
    let login = test_login();
    for (let i = 0; i < users.length; i++) {
        if (users[i].login == login) {
            alert("Пользователь с таким логином уже существует!");
            throw "stop";
        }
    }
    let password = test_password();
    users.push({
        login: login,
        password: password
    });
    console.clear();
    console.log(users);
}

function signIn() {
    let login = test_login();
    let password = test_password();
    let user;
    for (let i = 0; i < users.length; i++) {
        if (users[i].login == login && users[i].password == password) {
            user = users[i].login;
        }
    }
    if (user != null) {
        alert("Привет, " + user + "!");
    } else {
        alert("Неправильный логин или пароль!");
    }
}

let users = [
    {
        login: "Valera",
        password: "AC"
    },
    {
        login: "Vika",
        password: "AC"
    }
];

console.log(users);
function print_hello(first_name, last_name) {
    first_name = first_name || "Пользователь";
    last_name = last_name || "Тестовый";

    let full_name = first_name + " " + last_name;
    let greeting = "Добрый вечер";
    return greeting + ", " + full_name + "!";
}

let my_first_name = "Иван";
let my_last_name = "Краус";
let hello = print_hello(my_first_name, my_last_name);
console.log(hello);
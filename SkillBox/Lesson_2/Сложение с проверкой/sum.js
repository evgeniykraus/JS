let input;
let sum = 0;

while ((input = prompt("Введите число!")) !== null) {
    let number = Number(input);
    if (!isNaN(number)) {
        sum += number;
        console.log(sum);
    }
}

alert(`Сумма введенных чисел равна: ${sum}`);
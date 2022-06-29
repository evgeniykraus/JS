function getRandom() {
    min = Math.ceil(1);
    max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function start() {
    let random_n = getRandom();
    while (i = prompt('Введите число: ')) {
        let j = parseInt(i, 10);
        if (Number.isNaN(j)) {
            continue;
        } else {
            user_n = j;
            console.clear();
            console.log(random_n);
            console.log(user_n);
            if (random_n < user_n) {
                alert("Ваше число больше!");
            } else if (random_n > user_n) {
                alert("Ваше число меньше!");
            } else {
                alert("Вы угадали!😎");
                i = prompt(`Если хотите сыграть еще раз, нажмите "OK"`);
                if (i == null) {
                    break;

                } else {
                    start();
                }
            }
        }
    }
}

start();


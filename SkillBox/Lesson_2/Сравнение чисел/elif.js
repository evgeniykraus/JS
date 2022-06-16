function getUserNumber(prompt_text) {
    let year = null;
    while (isNaN(year) || !Number.isInteger(year)) {
        year = parseInt(prompt(prompt_text));
    }
    
    return year;
  }

let nuber_1 = getUserNumber("Введите первое число");
let nuber_2 = getUserNumber("Введите второе число");

if (nuber_1 == nuber_2) {
    alert("Числа " + nuber_1 + " и " + nuber_2 + " равны!");
} else if (nuber_1 > nuber_2) {
    alert("Число " + nuber_1 + " больше чем " + nuber_2 + "!");
} else if (nuber_1 < nuber_2) {
    alert("Число " + nuber_1 + " меньше чем " + nuber_2 + "!");
} else if (nuber_1 === NaN){
    alert("WTF?");
}



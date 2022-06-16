function entered_year(prompt_text) {
    let year = null;
    while (isNaN(year) || !Number.isInteger(year)) {
        year = parseInt(prompt(prompt_text));
    }
    
    return year;
  }

let number_1 = entered_year("Введите начало периода");
let number_2 = entered_year("Введите конец периода");

if (number_1>number_2){
    alert("Дата начала пиода должна быть меньше даты конца периода!");
}

for (number_1; number_1 <= number_2; number_1++) {    
    if (number_1%4 != 0){
        // console.log(number_1 + " год не високосный год (365 дней).");
    }
    else if (number_1%100 != 0){
        console.log(number_1 + " год високосный (366 дней).");
    }
    else if (number_1%400 != 0){
        // console.log(number_1 + " год не високосный год (365 дней).");
    }
    else {
        console.log(number_1 + " год високосный (366 дней).");
    }

}

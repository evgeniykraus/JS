function print_numbers(n) {
    let i = n;
    while (i > 0) {
        console.log(i);
        i--;
    }
}
//Рекурсия
function print_numbers_R(n) {
    if (n > 0) {
        console.log(n);
        print_numbers_R(n - 1)
    }
}

print_numbers_R(10);

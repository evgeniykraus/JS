function count(name) {
    let count = 1;
    for (let i = 1; i <= 10; i++) {
        console.log(name + " " + count);
        count++;
    }
}


count("Вася");
count("Петя");
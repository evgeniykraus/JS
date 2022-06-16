let sum = 0;
 
while (i = prompt('Введите число: ')) {
    let j = parseInt(i, 10);
    if (Number.isNaN(j)) {
      continue;
    } else{
    sum += j;
    console.log(sum);
}
}

alert('Сумма: ' + sum);
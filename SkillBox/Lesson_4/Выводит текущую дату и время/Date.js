let d = new Date();
let hour = ['час', 'часа', 'часов'];
let minute = ['минута', 'минуты', 'минут'];
let sec = ['секунда', 'секунды', 'секунд'];
let day = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
let month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];


function getNumEnding(iNumber, aEndings) {
    let sEnding, i;
    iNumber = iNumber % 100;
    if (iNumber >= 11 && iNumber <= 19) {
        sEnding = aEndings[2];
    }
    else {
        i = iNumber % 10;
        switch (i) {
            case (1): sEnding = aEndings[0]; break;
            case (2):
            case (3):
            case (4): sEnding = aEndings[1]; break;
            default: sEnding = aEndings[2];
        }
    }
    return sEnding;
}

function time() {
    console.clear();
    let d = new Date();
    console.log("Сегодня " + day[d.getDay()]);
    console.log(d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + " года");
    console.log(d.getHours() + " " + getNumEnding(d.getHours(), hour) + " " + d.getMinutes() + " " + getNumEnding(d.getMinutes(), minute) + " " + d.getSeconds() + " " + getNumEnding(d.getSeconds(), sec));

}
console.log(setInterval(time, 1000));
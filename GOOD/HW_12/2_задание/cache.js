class City {
    constructor() { // len - длина кеша
        this.cities_hash = new Array();
    }

    get_hash = function (city) {
        let sum = 0;
        for (let i = 0; i < city.length; i++) {
            sum += city.charCodeAt(i);
        }
        return (sum % 8192).toString(10).toUpperCase();
    }
    set(city) {
        let hash = this.get_hash(city);
        city = [city];
        if (!temp.cities_hash[hash]) {
            temp.cities_hash[hash] = city;
            document.getElementById("inner_4").innerHTML = city + " успешно добавлен в кеш";
            document.getElementById("inner_5").innerHTML = "Хеш-код: " + hash;
        }
        if (temp.cities_hash[hash].includes(city[0])) {
            document.getElementById("inner_4").innerHTML = city + " успешно добавлен в кеш";
            document.getElementById("inner_5").innerHTML = "Хеш-код: " + hash;
        } else {
            temp.cities_hash[hash][temp.cities_hash[hash].length] = city[0];
            document.getElementById("inner_4").innerHTML = city + " успешно добавлен в кеш";
            document.getElementById("inner_5").innerHTML = "Хеш-код: " + hash;
        }
    }

    get(city) {
        let hash = this.get_hash(city);
        city = [city];
        if (temp.cities_hash[hash]) {
            if (temp.cities_hash[hash].includes(city[0])) {
                document.getElementById("inner_4").innerHTML = "Город: " + city;
                document.getElementById("inner_5").innerHTML = "Хеш-код: " + hash;
            } else {

                document.getElementById("inner_4").innerHTML = city + " Отсутствует в кеше";
                document.getElementById("inner_5").innerHTML = "";
            }
        } else {
            document.getElementById("inner_4").innerHTML = city + " Отсутствует в кеше";
            document.getElementById("inner_5").innerHTML = "";
        }
    }

    del(city) {
        let hash = this.get_hash(city);
        city = [city];
        if (temp.cities_hash[hash]) {
            if (temp.cities_hash[hash].includes(city[0])) {
                temp.cities_hash[hash].splice(temp.cities_hash[hash].indexOf(city), 1);
                document.getElementById("inner_4").innerHTML = city + " был удален";
                document.getElementById("inner_5").innerHTML = "";
            } else {

                document.getElementById("inner_4").innerHTML = city + " Отсутствует в кеше";
                document.getElementById("inner_5").innerHTML = "";
            }
        } else {
            document.getElementById("inner_4").innerHTML = city + " Отсутствует в кеше";
            document.getElementById("inner_5").innerHTML = "";
        }
    }
}

function button_1() {
    let n = document.getElementById("inp1").value.trim();
    if (n != "") {
        temp.set(n);
        document.getElementById("inp1").value = "";
    }
}

function button_2() {
    let n = document.getElementById("inp2").value.trim();
    if (n != "") {
        temp.get(n);
        document.getElementById("inp2").value = "";
    }
}

function button_3() {
    let n = document.getElementById("inp3").value.trim();
    if (n != "") {
        temp.del(n);
        document.getElementById("inp3").value = "";
    }
}

function button_4() {
    let start = (new Date()).getTime();
    let i = 0
    for (; i < citiesFile.length; i++) {
        temp.set(citiesFile[i]);
        console.clear();
    }
    document.getElementById("inner_4").innerHTML = i + " значений успешно кешированы";
    let stop = (new Date()).getTime();
    document.getElementById("inner_5").innerHTML = "Время выполнения операции: " + (stop - start) / 1000 + " сек.";
}

function button_5() {
    console.clear();
    console.table(temp.cities_hash);
}

function Ftest(obj) {
    if (this.ST) return; let ov = obj.value;
    let ovrl = ov.replace(/^[А-я-()' ']+$/, '').length; this.ST = true;
    if (ovrl > 0) { obj.value = obj.lang; Fshowerror(obj); return }
    obj.lang = obj.value; this.ST = null;
}

function Fshowerror(obj) {
    if (!this.OBJ) { this.OBJ = obj; obj.style.backgroundColor = 'pink'; this.TIM = setTimeout(Fshowerror, 50) }
    else { this.OBJ.style.backgroundColor = ''; clearTimeout(this.TIM); this.ST = null; Ftest(this.OBJ); this.OBJ = null }
}

let temp = new City();
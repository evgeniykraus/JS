class LRU_cache {
    constructor(len) { // len - длина кеша
        this.len = len;
        this.q = new Array();
        this.m = {};
    }
    refresh() { // обновляет таблицу
        if (this.q[0]) document.getElementById("inner_1").innerHTML = this.q[0].key;
        if (this.q[1]) document.getElementById("inner_2").innerHTML = this.q[1].key;
        if (this.q[2]) document.getElementById("inner_3").innerHTML = this.q[2].key;
    }

    get(key) { // если объект есть в кеше, выводит его свойство
        if (!this.m[key]) {
            return -1;
        }
        const value = this.m[key].value;
        this.put(key, value);
        this.refresh()
        return value;
    }

    put(key, value) { // добавляет объект в массив
        if (this.m[key]) {
            this.q.splice(this.q.findIndex(node => node === this.m[key]), 1);
            this.m[key] = null;
            document.getElementById("inner_4").innerHTML = "Ключ: " + key + "\nЗначение: " + value;
            document.getElementById("inner_5").innerHTML = "(получено из кеша)"
        } else {
            document.getElementById("inner_4").innerHTML = "Ключ: " + key + "\nЗначение: " + value;
            document.getElementById("inner_5").innerHTML = "(расчитано функцией)";
        }
        this.q.push({ key, value });
        this.m[key] = this.q[this.q.length - 1];
        if (this.q.length > this.len) {
            this.m[this.q.shift().key] = null;
        }
        this.refresh();
    }

    calculate_sum = function (key) { // функция из задания
        let sum = 0;
        for (let i = 0; i < key; i++) {
            sum += i;
        }
        this.put(key, sum);
        this.refresh();
        return sum;
    }
}

function button_1() {
    let n = document.getElementById("inp1").value;
    if (n != "") {
        temp.calculate_sum(n);
        document.getElementById("inp1").value = "";
    }
}

function button_2() {
    let n = document.getElementById("inp2").value;
    if (n != "") {
        temp.get(n);
        document.getElementById("inp2").value = "";
    }
    if (temp.get(n) == -1) {
        document.getElementById("inner_4").innerHTML = "";
        document.getElementById("inner_5").innerHTML = "Значения " + n + " нет в кеше";
    }
}

function Ftest(obj) {
    if (this.ST) return; let ov = obj.value;
    let ovrl = ov.replace(/^[0-9]+$/, '').length; this.ST = true;
    if (ovrl > 0) { obj.value = obj.lang; Fshowerror(obj); return }
    obj.lang = obj.value; this.ST = null;
}

function Fshowerror(obj) {
    if (!this.OBJ) { this.OBJ = obj; obj.style.backgroundColor = 'pink'; this.TIM = setTimeout(Fshowerror, 50) }
    else { this.OBJ.style.backgroundColor = ''; clearTimeout(this.TIM); this.ST = null; Ftest(this.OBJ); this.OBJ = null }
}


let temp = new LRU_cache(3);
temp.calculate_sum(1);
temp.calculate_sum(2);
temp.calculate_sum(3);
let car = {
    mark: "BMW",
    model: "X5",
    year: 2010,
    get_name: function () {
        return this.mark + " " + this.model;
    }
};

let car_2 = {
    mark: "Lada",
    model: "Priora",
    year: 2010,
    get_name: function () {
        return this.mark + " " + this.model;
    }
};

console.log(car.mark);
console.log(car.model);
console.log(car["year"]);

console.log(car.get_name());
console.log(car_2.get_name());

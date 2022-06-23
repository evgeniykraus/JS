let car = {
    mark: "BMW",
    model: "X5",
    year: 2010,
};

let car_2 = {
    mark: "Lada",
    model: "Priora",
    year: 2010,
    price: 150000
};

let car_3 = {};

for (let prop in car_2) {
    let prop_value = car_2[prop];
    car_3[prop] = prop_value;
}

function print_obj_props(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            let prop_value = obj[prop];
            console.log(`${prop}: ${prop_value}`);
        }
    }
}

print_obj_props(car);
print_obj_props(car_2);


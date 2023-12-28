class Person{

    constructor(name, age) {
        this.name=name;
        this.age=age;
    }

    sayName() {
        return this.name; 
    }
}

const p1 = new Person("Kartik", 26);
const p2 = new Person("Sabeel", 23);

// -----------------------------------------------

class Car{

    constructor(name, color, price) {
        this.name=name;
        this.color=color;
        this.price=price;
    }

    getCarName() {
        return this.name;
    }

    getColor() {
        return this.color;
    }

    get getprice() {
        return this.price;
    }

    set setPrice(newPrice) {
        this.price=newPrice;
    }
}

class RacingCar extends Car{
    constructor(name, color, price, maxSpeed, idDiscBrake) {

        super(name, color, price) //calling the parent cass constructor

        this.maxSpeed = maxSpeed;
        this.idDiscBrake = idDiscBrake;
    }

    get getMaxSpeed() {
        return this.maxSpeed;
    }
}

const c1 = new Car("Audi", "Black", 2000000);


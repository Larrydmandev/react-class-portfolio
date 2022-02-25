import react, { Fragment } from "react";

class Car{
    constructor(car){
        this.brand = car;
    }

    present(){
        return (
            'this is a' + this.brand
        )
    }
}

class Model extends Car {
    constructor(name, mode) {
        super(name);
        this.model = mode;
    }


    show() {
        return this.present() + ", it is a" + "" + this.model;
    }
}

const sentence = new Model('Ford' , "Mustang");

console.log(sentence.show());

const carSaying = new Car("Ford");


export default Car;
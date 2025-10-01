//1. Crée une classe Person avec les propriétés name et age, et une méthode greet().
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Bonjour ${this.name}, vous avez ${this.age} ans.`);
    }
}

const person = new Person("Emna", 21);
person.greet();

//2. Crée une classe Student qui hérite de Person et ajoute une propriété school.
class Student extends Person{
    school:string;
    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }

    greet(): void {
        console.log(`Bonjour ${this.name}, vous avez ${this.age} ans et vous étudiez à ${this.school}.`);
    }
}

const student = new Student("Emna", 21, "Université de Tunis El Manar");
student.greet();

//3. Crée une classe abstraite Shape avec une méthode abstraite area(), puis implémente Circle et Rectangle.
abstract class Shape {
    abstract area(): number; // méthode abstraite
}


class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log(`Aire du cercle: ${circle.area()}`);


class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(4, 6);
console.log(`Aire du rectangle: ${rectangle.area()}`);

//4. Crée une interface Drivable avec une méthode drive(), puis une classe Car qui l’implémente.
interface Drivable{
    drive():void;
}

class Car implements Drivable{
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
    drive(): void {
        console.log(`La voiture ${this.brand} roule.`);
    }
}

const car = new Car("Toyota");
car.drive();
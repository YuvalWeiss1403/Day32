// Ex1 
// A + B
class Shape {
    constructor(name,sides,sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter(){
        console.log(`the perimeter of ${this.name} is ${this.sides*this.sideLength} `);
    }
}

class Square extends Shape{
    static name = 'square';
    static sides = 4;
    constructor(sideLength){
        super(sideLength) ;
    }
}    

let square = new Shape('square',4,5);

square.calcPerimeter();

let triangle = new Shape('triangle',3,3);

triangle.calcPerimeter();

let square2 = new Square(5);

square2.calcPerimeter();

// Ex2 
// 1)
class Circle {
    static PI = 3.14;
    constructor(radius){
        this.radius = radius;
    }
    area(){
        return(`the area is: ${Circle.PI*this.radius}`);
    }
}

let circle = new Circle(4);
console.log(circle.area());

// 2)

class Account{
    constructor(balance,owner){
        this.balance = balance;
        this.owner = owner;
    }
    static create(owner){
        return new Account(0,owner);
    }
}

// Ex3
// 1)
class Person{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this.name.toUpperCase();
    }
}

let yuval = new Person("yuval");
console.log(yuval.getName());

// 2)

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    set price(price2){
        this.price = Math.round(price2);
    }
}

// Ex4

class circle2 {
    constructor(radius){
        this._radius = radius;
    }
    get diameter(){
        return 2*this._radius;
    }

    set diameter(diameter){
        this._radius = diameter/2;
    }
}
// Ex5

class Person2 {
    constructor(firstName,lastName,age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    displayInfo(){
        return (`${this._firstName} ${this._lastName} (${this._age}) years old`)
    }
    set _age(age){
        if(age>0){
            this._age=age
        }else{
            console.log("age is set to a negative number")
        }
    }
}

// EX6

class BankAccount{
    constructor(accountNumber ,accountHolder ,accountBalance ){
        this._accountNumber = accountNumber;
        this._accountHolder = accountHolder;
        this._accountBalance = accountBalance;
    }
    deposit(amount){
        return this.accountBalance += amount;
    }
    withdraw(amount){
        return this.accountBalance -= amount;
    }
    checkBalance(){
        return this.accountBalance;
    }
}

const myAccount = new BankAccount('123456', 'John Doe', 100);
console.log(myAccount.checkBalance()); // 100
myAccount.deposit(50);
console.log(myAccount.checkBalance()); // 150
myAccount.withdraw(25);
console.log(myAccount.checkBalance()); // 125

// Ex7 

class Animal{
    constructor(name,species){
        this.name = name;
        this.species =species;
    }
    makeSound(){
        return(`the ${this.name} is making a sound`)
    }
}

class Dog extends Animal{
    constructor(name,species){
        super(name,species);
    }
    bark(){
        return('The dog is barking');
    }
}

class Cat extends Animal{
    constructor(name,species){
        super(name,species);
    }
    meow(){
        return('The cat is meowing');
    }
}

class Lion extends Animal{
    constructor(name,species){
        super(name,species);
    }
    roar(){
        return('The lion is roaring');
    }
}
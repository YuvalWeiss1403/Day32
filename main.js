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
        this._name = name;
    }
    get name(){
        return (this._name.toUpperCase());
    }
}

let Yuval = new Person("yuval");
console.log(Yuval.name);

// 2)

class Product {
    constructor(name, price){
        this._name = name;
        this._price = price;
    }
    set price(price2){
        this._price = Math.round(price2);
    }
    get price(){
        return this._price;
    }
}

let coke = new Product("coke",12);
coke.price = 13.4566;
console.log(coke.price);
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
        return this._accountBalance += amount;
    }
    withdraw(amount){
        return this._accountBalance -= amount;
    }
    checkBalance(){
        return this._accountBalance;
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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Part 2

// Ex1 

class Person3 {
    constructor(firstName,lastName,age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    getFullName(){
        return `${this._firstName} ${this._lastName}`;
    }
}

class Student extends Person3{
    constructor(firstName,lastName,age,studentId){
      super(firstName,lastName,age)
      this.studentId = studentId;
    }

    getDetails(){
        return `${this._firstName} ${this._lastName} ${this._age} ${this.studentId}`
    }
}

let studentYuval = new Student("yuval","weiss",21,322990003);
console.log(studentYuval.getFullName());
console.log(studentYuval.getDetails());


// Ex2 

class BankAccount2 {
    constructor(balance){
        this._balance = balance;
    }
    deposit(amount){
        this._balance+=amount;
    }
    set balance(amount){
        this._balance = amount;
    }
    get balance(){
        return this._balance;
    }
}

const account = new BankAccount2(0);
account.deposit(100);
console.log(`Balance: ${account.balance}`);
account.balance = 200; 
console.log(`Balance: ${account.balance}`);


// Ex3
class Car{
    constructor(make,model,year){
        this._make = make;
        this._model = model;
        this._year = year;
    }

    get details(){
        return `make: ${this._make} model: ${this._model} year: ${this._year}`
    }
    setDetails(make,model,year){
        this._make = make;
        this._model = model;
        this._year = year;
    }
}

const car = new Car("Toyota", "Camry", 2020);
console.log(car.details); // Make: Toyota, Model: Camry, Year: 2020
car.setDetails("Honda", "Civic", 2022);
console.log(car.details); // Make: Honda, Model: Civic, Year: 2022

// Ex4

class BankAccount3{
    constructor(balance,owner){
        this._balance = balance;
        this._owner = owner;
        this._transactions = [];
    }
    deposit(amount){
        this._balance += amount;
        this._transactions.push(amount);
    }
    withdraw(amount){
        this._balance -=amount;
        this._transactions.push(-amount);
    }
    get balance(){
        return this._balance;
    }
    get transactions(){
        return this._transactions;
    }
}

let myBankAccount = new BankAccount3(100,"yuval");
myBankAccount.deposit(55);
console.log(myBankAccount.balance);
console.log(myBankAccount.transactions);
myBankAccount.withdraw(75);
console.log(myBankAccount.balance);
console.log(myBankAccount.transactions);

// Ex5

class Animal2{
    static speed =0;
    constructor(name){
        this._name = name;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this._name} current speed: ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        console.log(`${this._name} is standing still`);
    }
}

class Rabbit extends Animal2{
    constructor(name){
        super(name);
    }
    hide(){
        console.log(`${this._name} is hiding`);
    }
    stop(){
        console.log(`${this._name} is standing still`);
        this.hide();    
    }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!


// Ex6

class Calculator {
    add(...args) {
        if (args.length === 1) return args[0]
        if (args.length === 2) return args[0] * args[1];
      }
     
}

let calculator = new Calculator ;
console.log(calculator.add(5));
console.log(calculator.add(5,2)); 

// Ex7

const formatString = (text, options = {}) => {
    if('lowercase' in options && options['lowercase']==true){
        return text.toLowerCase();
    }else if('uppercase' in options && options['uppercase']==true){
        return text.toUpperCase();
    }
    else{
        return text;
    }
};

console.log(formatString("Hello World!"));// Output: Hello World!
console.log(formatString("Hello World!", { uppercase: true })); // Output: HELLO WORLD!
console.log(formatString("Hello World!", { lowercase: true })); // Output: hello world!


// Ex8

class Employee {
    constructor() {
        if (this.constructor == Employee) {
          throw new Error("Object of Abstract Class cannot be created");
        }
    }
    getSalary(){
        return this._salary;
    }
    getMonthlyBonus(){
        console.log("error");
    }
}

class Manager extends Employee{
    constructor(salary){
        super();
        this._salary =salary;
    }
    getMonthlyBonus(){
        return (this._salary*0.1);
    }
}

class Developer extends Employee{
    constructor(salary){
        super();
        this._salary =salary;
    }
    getMonthlyBonus(){
        return (this._salary*0.05);
    }
}

const manager = new Manager(50000);
console.log(manager.getSalary()); // 50000
console.log(manager.getMonthlyBonus()); // 5000
const developer = new Developer(40000);
console.log(developer.getSalary()); // 40000
console.log(developer.getMonthlyBonus()); // 2000

// const emp = new Employee(); // it will throw error "Object of Abstract Class cannot be created"


// Ex9


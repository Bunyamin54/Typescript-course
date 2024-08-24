let firstName: string = " Can";
let lastName: string = " Boz";

let age: number = 29;
let isUpdated: boolean = true;

console.log("Typescripte girdik");
console.log("Can Boz");
console.log("Egitimimize hosgeldiniz");

//* type language typscript - age degerine string atayamayiz

function display(id: any, name: string) {
  console.log("Id = " + id + ", Name =" + name);
}

let firstNames: Array<string> = ["Can", "Hasan", "Ayse"];

console.log(firstNames);

let ids: Array<number>;
ids = [23, 34, 100, 124, 44];

console.log(ids);

let values: (string | number)[] = ["Apple", 2, "Orange", 3, 4, "Bananaa"];

console.log(values);

let fruits: Array<string>;
fruits = ["Apple", "Orange", "Banana"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]); // Appleapp.js:22 Orange app.js:22 Banan
// }

console.log(fruits[0]);

//* Tupple

let Id: number = 1;
let instructureName: string = "Can";

let instructure: [number, string] = [1, "Can"];

//* Data type object

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

let instructure1: Person;
instructure1 = {
  firstName: "Can",
  lastName: "Boz",
  age: 29,
  jobTitle: "Devoloper",
};

console.log(instructure1.age);

//* Enum

enum Media {
  Newspaper = 1, //* baslangic degerini degistirebiliyoruz
  Nemsletter,
  Magazine,
  Book,
}

console.log(Media.Magazine);
console.log(Media[3]); // Book

// enum PrintMedia {

//     Newspaper = 'Newspaper',
//     Newsletter = 'Newsletter',
//     Magazine = 'Magazine',
//     Book = 'Book'
// }

// console.log(PrintMedia.Newsletter)
// console.log(PrintMedia['Newspaper'])

//*! Union

let code: string | number | boolean = "123"; //* union tanimlayabiliriz istedigimiz dat typlari

console.log(code);

//! Any  backend datatype degisince typ bilmiyorsak bir karmasa varsa any yazip gecriz

let someThing: any = "Hello";

someThing = 45; //* type any oldugu icin istedigimiz atama yapariz
console.log(someThing);

let arr: any[] = ["John", true, 125];

console.log(arr);

//!  Void fonksiyon geriye deger dondurmuyorsa void ile donuyoruz

function sayHello(): void {
  console.log("Hi");
}

sayHello();

//! never data type geriye hicbir value donmezse hata firlatmasi lazm

// function throwError(errorMsg: string): never {
//     throw new Error(errorMsg);
// }

// throwError("Hata")

// ? inference -  typ belirmezsek de tutlur

let sayac = 0;
console.log(typeof sayac);

// function increment(counter: number){
//     return counter++;
// }

// function sum(a:number , b:number){

//     return a+b;
// }
// let total: number = sum (10,15)
// let total: string = sum (10,15)

//* type assertion

// let code: any = 123;

// let empCode = <number>code;
// console.log(typeof empCode);

interface Employee {
  name: string;
  code: number;
}

let employee = <Employee>{};

console.log(typeof employee);
employee.name = "Can";

console.log(employee);

//* If else ternary

let x: number = 15;

let y: number = 25;

if (x > y) {
  console.log(" X Y den buyuktur");
} else if (x < y) {
  console.log("X Y den kucuktur");
} else {
  console.log("X Y den kucuktur veya esittir.");
}

//* Ternary

x > y
  ? console.log(" X Y den buyuktur")
  : console.log("X Y den kucuktur veya esittir.");

//* Switch Case

let day: number = 5;

switch (day) {
  case 0:
    console.log("Pazar");
    break;
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Sali");
    break;
  case 3:
    console.log("Carsamba");
    break;
  case 4:
    console.log("Persembe");
    break;
  case 5:
    console.log("Cuma");
    break;
  case 6:
    console.log("Cumartesi");
    break;
  default:
    console.log("Boyle bir gun yok");
    break;
}

//* for loop

for (let i = 0; i < 3; i++) {
  console.log("I degerim", i);
}

let arrr = [10, 20, 30, 40];

for (let item of arrr) {
  console.log(item);
}

let str = "Can Boz";

for (let item of str){
    console.log(item)
}

//* index degeri in ile kullanilir
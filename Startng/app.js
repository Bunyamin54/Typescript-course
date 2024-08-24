var firstName = " Can";
var lastName = " Boz";
var age = 29;
var isUpdated = true;
console.log("Typescripte girdik");
console.log("Can Boz");
console.log("Egitimimize hosgeldiniz");
//* type language typscript - age degerine string atayamayiz
function display(id, name) {
    console.log("Id = " + id + ", Name =" + name);
}
var firstNames = ["Can", "Hasan", "Ayse"];
console.log(firstNames);
var ids;
ids = [23, 34, 100, 124, 44];
console.log(ids);
var values = ["Apple", 2, "Orange", 3, 4, "Bananaa"];
console.log(values);
var fruits;
fruits = ["Apple", "Orange", "Banana"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]); // Appleapp.js:22 Orange app.js:22 Banan
// }
console.log(fruits[0]);
//* Tupple
var Id = 1;
var instructureName = "Can";
var instructure = [1, "Can"];
var instructure1;
instructure1 = {
    firstName: "Can",
    lastName: "Boz",
    age: 29,
    jobTitle: "Devoloper",
};
console.log(instructure1.age);
//* Enum
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 1] = "Newspaper";
    Media[Media["Nemsletter"] = 2] = "Nemsletter";
    Media[Media["Magazine"] = 3] = "Magazine";
    Media[Media["Book"] = 4] = "Book";
})(Media || (Media = {}));
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
var code = "123"; //* union tanimlayabiliriz istedigimiz dat typlari
console.log(code);
//! Any  backend datatype degisince typ bilmiyorsak bir karmasa varsa any yazip gecriz
var someThing = "Hello";
someThing = 45; //* type any oldugu icin istedigimiz atama yapariz
console.log(someThing);
var arr = ["John", true, 125];
console.log(arr);
//!  Void fonksiyon geriye deger dondurmuyorsa void ile donuyoruz
function sayHello() {
    console.log("Hi");
}
sayHello();
//! never data type geriye hicbir value donmezse hata firlatmasi lazm
// function throwError(errorMsg: string): never {
//     throw new Error(errorMsg);
// }
// throwError("Hata")
// ? inference -  typ belirmezsek de tutlur
var sayac = 0;
console.log(typeof sayac);
var employee = {};
console.log(typeof employee);
employee.name = "Can";
console.log(employee);
//* If else ternary
var x = 15;
var y = 25;
if (x > y) {
    console.log(" X Y den buyuktur");
}
else if (x < y) {
    console.log("X Y den kucuktur");
}
else {
    console.log("X Y den kucuktur veya esittir.");
}
//* Ternary
x > y
    ? console.log(" X Y den buyuktur")
    : console.log("X Y den kucuktur veya esittir.");
//* Switch Case
var day = 5;
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
for (var i = 0; i < 3; i++) {
    console.log("I degerim", i);
}
var arrr = [10, 20, 30, 40];
for (var _i = 0, arrr_1 = arrr; _i < arrr_1.length; _i++) {
    var item = arrr_1[_i];
    console.log(item);
}
var str = "Can Boz";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var item = str_1[_a];
    console.log(item);
}
//* index degeri in ile kullanilir
//* while dongusu
var counter = 10;
while (counter < 5) {
    console.log(counter);
    counter++;
    if (counter == 3) {
        break;
    }
}
do {
    console.log(counter);
    counter++;
} while (counter < 5);
//* function
//  function add (a: number , b: number): number{  //* inference  burdaki number
//     return a+b
//  }
//  let toplam = add(10,20)
//  console.log(toplam)
// function bastir(): void {  //* void return ozelligi yoktur  hicbirsey yazmassak default number oluyor type
//   console.log("Can Boz");
// }
// bastir();
// function birlestir ( ad: string , soyad:string): string {
//     return ad + ' ' + soyad
// }
// let degisken = birlestir ('Can', ' Boz')
// console.log(degisken)
//* default parametrel
function birlestir(ad, soyad) {
    return ad + " " + soyad;
}
var degisken = birlestir("Can", " Bozzz"); // * bozzz degerini yolladigimiz iinc ukardaki boz default gecersiz oldu
console.log(degisken);
//* Arrow functions  optional parameter
function carpim(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
var degisken = carpim(5, 10, 3);
console.log(degisken);

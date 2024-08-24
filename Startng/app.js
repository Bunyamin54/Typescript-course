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
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Appleapp.js:22 Orange app.js:22 Banan
}
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
var code = '123'; //* union tanimlayabiliriz istedigimiz dat typlari 
console.log(code);
//! Any  backend datatype degisince typ bilmiyorsak bir karmasa varsa any yazip gecriz
var someThing = 'Hello';
someThing = 45; //* type any oldugu icin istedigimiz atama yapariz
console.log(someThing);
var arr = ['John', true, 125];
console.log(arr);
//!  Void fonksiyon geriye deger dondurmuyorsa void ile donuyoruz
function sayHello() {
    console.log('Hi');
}
sayHello();
//! never data type geriye hicbir value donmezse hata firlatmasi lazm
// function throwError(errorMsg: string): never {
//     throw new Error(errorMsg);
// }
// throwError("Hata")
// ? inference -  typ belirmezsek de tutlur
var sayac = 0;
console.log(typeof (sayac));
// function increment(counter: number){
//     return counter++;
// }
function sum(a, b) {
    return a + b;
}
var total = sum(10, 15);
var total = sum(10, 15);

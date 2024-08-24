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

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

for (let i = 0; i < fruits.length; i++) {
 console.log(fruits[i]); // Appleapp.js:22 Orange app.js:22 Banan
}

console.log(fruits[0])

//* Tupple

let Id: number = 1;
let instructureName : string = 'Can';

let instructure : [number, string] = [1, 'Can']
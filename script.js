let myFavoriteHero = 'Hulk';
let x = 50;
let h = 5;
let y = 10;

const character = {
    name: 'Jack Sparrow',
    age: 10
}

character.age = 25;

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.")

const toy1 = {
    name: 'Russ myYear', 
    price: 19
}

const toy2 = {
    name: 'Rallo mcKing',
    price: 29
}

console.log(toy1.price + toy2.price)

let globlaBasePrice = 10000;

const car1 = {
    name: 'BMW m&m',
    basePrice: 50000,
    finalPrice: 60000
}

const car2 = {
    name: 'Chevrloet Corbina',
    basePrice: 70000,
    finalPrice: 80000
}

globlaBasePrice = 25000;

car1.finalPrice = car1.basePrice + globlaBasePrice;
car2.finalPrice = car2.basePrice + globlaBasePrice;


alert(10*5);
alert(10/2);
alert(15%9);

y = 10;
z = 5;

x = y + z;
x = y * z;

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0])

avengers[0] = 'IRONMAN';

alert(avengers.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

rickAndMortyCharacters.push('Lapiz Lopez')
rickAndMortyCharacters.pop(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

console.log(rickAndMortyCharacters[0] + ' ' + rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

rickAndMortyCharacters.push('Lapiz Lopez')
rickAndMortyCharacters.splice(1, 1)

console.log(rickAndMortyCharacters)

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 / number1 === number3) {
    console.log('number1 es estrictamente igual a 10')
}

if (number1 !== number2) {
    console.log('number1 es estrictamente distinto a number2')
}

if (number3 != number1) {
    console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


for (let i = 0; i <= 9; i++) {
    console.log(i)
}

for (let i = 0; i <= 9; i++) {
    if (i % 2  == 0) {
        console.log(i)
    }
}

for (let i = 0; i <= 10; i++) {
    if (i !== 10) {
        console.log('Intentando dormir')
    } else {
        console.log('Dormido!')
    }
}
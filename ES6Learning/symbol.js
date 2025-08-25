let sym1=Symbol('banana');
let sym2=Symbol('banana');
console.log(sym1);
console.log(sym2);

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();
console.log(digits[Symbol.iterator]());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

console.log(games.add('Banjo-Tooie'));
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);
console.log(games.delete('hello'));
console.log(games.size);
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);
let mon=months.values();
for(let i=1;i<=months.size;i++){
console.log(mon.next().value);
}


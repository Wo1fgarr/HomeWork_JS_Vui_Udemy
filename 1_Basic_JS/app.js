//! Домашнее задание - Строки
// let string = "some test string";

// // извлекаем первый и последний символы
// let someChar = string[0] + ' ' + string[string.length - 1];
// // первая буква заглавная
// let newStr = string.charAt(0).toUpperCase() + string.slice(1, string.length - 1) + string.charAt(string.length - 1).toUpperCase();
// // определяем начало вхождения подстроки
// let stringPosition = string.indexOf('string');
// // ищем второй пробел
// let secondSpacePosition = string.lastIndexOf(' ');
// // извлекаем с 5 позиции + 4 символа
// let charFivePosition = string.slice(4,8);
// // извлекаем с 5 по 9 позицию
// let charFivetoNinePosition = string.slice(4,8);
// //извлекаем без последних 6 символов
// let delLastSixSymbols = string.slice(0, string.length - 6);

// // из двух Numbers получаем string при помощи конкатенации
// let a = 20,
//     b = 16;

// let getConcat = a.toString() + b.toString();


// console.log(someChar);
// console.log(newStr);
// console.log(stringPosition);
// console.log(secondSpacePosition);
// console.log(charFivePosition);
// console.log(charFivetoNinePosition);
// console.log(delLastSixSymbols);
// console.log(getConcat);


//! Домашнее задание - Числа
// let user = {
//   name: "Dima",
//   age: 33
// };

// let fixedPi = (Math.PI).toFixed(2);


// let minNum = Math.min(15, 11, 16, 12, 51, 12, 13, 5);
// let maxNum = Math.max(15, 11, 16, 12, 51, 12, 13, 5);

// let randomNumber = (Math.random()).toFixed(2);
// let randomIntnumber = Math.round((Math.random() * (50 - 0)) + 0);

// let someSum = (0.6 + 0.7).toFixed(1);

// let getNumber = parseInt('100$');

// console.table(user);
// console.log(fixedPi);
// console.log(minNum);
// console.log(maxNum);
// console.log(randomNumber);
// console.log(randomIntnumber);
// console.log(someSum);
// console.log(getNumber);

//! Домашнее задание - Объекты

// const obj = {
//   product: 'iphone'
// };

// obj.price = 1000;
// obj.currency = 'dollar';
// /* перед тем как в объект объект можно добавить что-то, 
// его нужно проинициализировать*/
// obj.details = {};
// obj.details.model = '';
// obj.details.color = '';

// console.log(obj);

//! Домашнее задание - Логические операторы
//! if statement
// 1
// let a = 0 || 'string'; // string

// let a = 1 && 'string'; string

// let a = null || 25; 25

// let a = null && 25; null

// let a = null || 0 || 35; 35

// let a = null && 0 && 35; // null

// console.log(a);

// 2
// let b = 12 + 14 + '12'; // строка 2612 - конкатенация по второму знаку плюс

// let b = 3 + 2 - '1'; // число 4 арифметика т.к. нет конкатенации - первый элемент Number - интерпретатор приводит к числу

// let b = '3' + 2 - 1; // число потому, что второй минус, конкатенация невозможна 

// let b = true + 2; // true приводится к Number, далее сложение

// let b = +'10' + 1; // знак + превращает строку 10 в число, далее операция сложения

// let b = undefined + 2; // undefined - это не число, операции с ним дадут NaN 

// let b = null + 5; // null приводится по типу к числу 5, становится 0

// let b = true + undefined; // 1 при попытке сложения с undefined даст NaN

// console.log(b);
// console.log(typeof b);

// 3
// let isVisible = 'hidden';
// if(isVisible == 'hidden'){
//   isVisible = 'visible';
// }
// else{
//   isVisible = 'hibben';
// }

// console.log(isVisible);

// 4
// let someNumber = 3;
// if(someNumber == 0){
//   someNumber = 1;
// }
// else if(someNumber < 0){
//   someNumber = 'less then zero';
// }
// else if(someNumber > 0){
//   someNumber *= 10;
// }

// console.log(someNumber);

// 5
// let car = { 
//   name: 'Lexus', 
//   age: 10, 
//   create: 2008, 
//   needRepair: false 
// };

// let isOk;

// if(car.age > 5){
//   console.log('Need Repair');
//   car.needRepair = true;
// } 
// else{
//   car.needRepair = false;
// }

// isOk = car.needRepair;

// console.log(`needRepair: ${isOk}`);

// 6
// let item = { 
//   name: 'Intel core i7', 
//   price: '100$', 
//   discount: '15%' 
// };


// if( !isNaN(parseFloat(item.price)) && !isNaN(parseFloat(item.discount))){
//   item.priceWithDiscount = parseFloat(item.price) + (parseFloat(item.price) * (parseFloat(item.discount) / 100));
//   console.log(`priceWithDiscount: ${item.priceWithDiscount}$`);
// }
// else{
//   console.log(item.price);
// }

// 7
// let product = {
//   name: 'Яблоко',
//   price: '10$'
// };

// let min = 10;
// let max = 20;

// if( parseFloat(product.price) >= min && parseFloat(product.price) <= max ){
//   console.log(product.name);
// }
// else{
//   console.log('товаров не найдено')
// }

//! Домашнее задание - Тернарные операторы и switch case
// 1
let a = 'other';

switch(a){
  case 'block':
    console.log('block')
    break;
  case 'none':
    console.log('none')
    break;
  case 'inline':
    console.log('inline')
    break;
  default:
    console.log('other')
}

// 2
let b = 'hidden';
b === 'hidden' ? b = 'visible': b = 'hidden';

// 3
let c = 0;

c === 0 ? c = 1 : 
c < 0 ? c = 'less then zero' : 
c *= 10;
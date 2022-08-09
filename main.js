// -------------------- Hello JS ------------------- //

// console.log("Hello JS!");
// console.error("Hello JS!");
// console,log.warn("hell0 js!");

//переменные var, let, first
// console.log(birth);
// const birth = "25.09.2003";
// console.log(birth);

// console.log(lastName);
// let lastName = 'Pavlova';
// console.log(lastName);
// lastName = "Pirogova";
// console.log(lastName);

// console.log(firstName);
// var firstName = "Anna";
// console.log(firstName);
// firstName = "Elena";
// console.log(firstName);

//!названия переменных
//! так нельзя
// нельзя ставить цифры в начале
// let 5block = ''
// зарезервированные слова нельзя использовать
//let let
// let first-name
//const Red = 'asda';

//! так можно
//let camelCase
// let color_orange
// const RED = "029029"
// let $block = "";
// const number10 = 10

//! Типы данных
// 1 - string
// let str = "strochka";
// console.log(str.length);
// console.log(str);
// const typeOfStr = typeof str;
// console.log(typeOfStr);

// console.log(typeof str);

// let str1 = "qwe";
// let str2 = 'asd';
// let str3 = `zxc`;

// 2 - number
// let num1 = 100;
// const PI = 3.14;
// console.log(typeof num1);

// 3 - boolean 
// const bool1 = true;
// const bool2 = false;

// 4 - null - специальная пустота
// let error = null;

// 5 - undefined
// let hello;
// console.log(hello);

// 6 - object (object, array)
// object
// let user = {
//     name: "Diana Kim",
//     age: 20,
// };
// console.log(user.name);
// console.log(user.age);

// console.log(user["name"]);

//array
// let arr = [false, 100, true, {}, [], "hello"];
// console.log(arr.length);
// console.log(arr);

// console.log(arr[0]);
// console.log(arr[5]);

// 7 - symbol 
// let id = Symbol("r567u");


// 8 bigInt 
// let int = 34121212121n;

//! Math operators
// console.log(1 + 5);
// console.log(5 - 2);
// console.log(10 / 2);
// console.log(2 * 3);

// console.log(2 ** 3);
// console.log(10 % 7);

//! -, /, * 
// console.log("10" / "2");

// NaN -> Not a Number
// console.log("hello" / 2);

//! +, concat
// console.log('10' + '2');
// console.log(10 + '2');
// console.log('10' + 2);

//! true-false значеня
// console.log(Boolean(0)); //false
// console.log(Boolean(-1)); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("hello")); //true
// console.log(Boolean("")); //false

//! сравнение
//!строгое === (тип данных и значение должны быть равны)
// console.log(3 === 5); //false
// console.log(3 === 3); //true
//console.log(3 === '3') //false
// console.log(3 !== 5); //true

//!нестрогое == (значение должны быть равны)
// console.log(3 == 3); //true
// console.log(3 == '3'); //true
// console.log('3' != 3);

//! > < =
// console.log(3 < 5); //true
// console.log(5 < 3); //false
// console.log(4 >= 4); //true
// console.log(4 <= 4); //true

//! из string в number
// let elem = "1000";
// console.log(elem);
// console.log(+elem);

//!parseInt 
// let elem2 = "1032423000jhrjsh";
// console.log(parseInt(elem2));

//! parseFloat
// let elem3 = "100.200dfgdfg";
// console.log(parseFloat(elem3));

//! Number
// let elem4 = "1000";
// console.log(Number(elem4));

//! из number в string
// let num = 8989;
// console.log(num);
// console.log(typeof num.toString());
// console.log(String(num));

//! alert, prompt, confirm
// alert("Hello, User!");
// let firstName = prompt("Как вас зовут?");
// console.log(firstName);
//интерполяиця - встроенное выражение
// alert(`${firstName}, welcome!`);

// let value = confirm("Вам есть 18?");
// console.log(value);


// let num1 = prompt('Введите первое число!');
// let operator = prompt('Введите оператор');
// let num2 = prompt('Введите второе число!');
// let result = eval(num1 + operator + num2);

// alert(result);



"use strict"

//Задание 1


//      Создаем массив от 1 до 100
var arr = [];
var end = 1;
while (end < 100) {
    end++;
    arr.push(end);
}
//      Удаляем все четные цифры
var a = 2;
var b = 2;
while (a <= 100) {
    a += b;
    arr.splice(arr.indexOf(a), 1);
}
//      Удаляет все цифры которые деляться на нечетные до 10
a = 4;
b = 3;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(arr);


//Задание 2

let basket = [
    {
        product: "pen",
        price: getNumber(50, 100)
    },
    {
        product: "pencil",
        price: getNumber(50, 100)
    },
    {
        product: "file",
        price: getNumber(50, 100)
    },
    {
        product: "paper",
        price: getNumber(50, 100)
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + " руб.");

//Задание 4

var i;
for (i = 0; i <= 9; i++) {
    console.log(i);
}

//Не знаю как без console.log  вывести... Чтобы пусто было.

//Задание 5

var arr = [];
var end = 0;
while (end < 20) {
    end++;
    arr.push('x');
    console.log(arr);
}
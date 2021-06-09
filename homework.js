"use strict"


//Задание 1

console.log('Ответ задача 1');

var max = 999;
var digit = {
    number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
    units: 0,
    tens: 0,
    hundreds: 0,
};
if (digit.number <= 9) {
    digit.units = digit.number;
} else if (digit.number <= 999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
} else {
    digit.number = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');
}

//Задание 2

//Функция добавления товара в корзину
function addProductBasket(arr, name, price, quantity) {
    arr.push({
        product: name,
        price: price,
        quantity: quantity,
        total: totalSum
    });
}

function totalSum() {
    return this.price * this.quantity;
}

var basket = [
    {
        product: 'shirt',
        price: 100,
        quantity: 2,
        total: totalSum
    },
    {
        product: 'shorts',
        price: 200,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'dress',
        price: 300,
        quantity: 3,
        total: totalSum
    },
    {
        product: 'socks',
        price: 150,
        quantity: 5,
        total: totalSum
    },
]

function countBasketPrice(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}



console.log('Общая стоимость: ' + countBasketPrice(basket));
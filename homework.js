"use strict"

// Задание 1

var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2 Потому что, префикс ++ увеличивает на еденицу.
d = b++; console.log(d);           // 1 Потому что постфикс ++ возвращает сначала первое значение. 
c = (2 + ++a); console.log(c);      // 5 Потому что в первом примере мы добавили еденицу, а = 2, здесь добавляем еще еденицу, получается а = 3, в итоге с = 5;
d = (2 + b++); console.log(d);      // 4 Потому что во втором примере мы прибавили единицу в переменную b ее значение стало равно 2. В данном примере прибавляем еще единицу и b становится равно 3, но выводим предыдущее значение т.е. 2, отсюда получаем 4;
console.log(a);                    // 3 Прибавили по единице в примере 1 и примере 3
console.log(b);                    // 3 Прибавили единицу в примере 2 и примере 4 

//Задание 2

var a = 2;
var x = 1 + (a *= 2);
//Потому что получается х = 1 + (а = а * 2), т.е. х = 1 + 4, х = 5;
//Ответ: x = 5;

//Задание 3

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

if (a >= 0 && b >= 0) {
    c = a - b;
    alert("Разность " + c);
} else if (a < 0 && b < 0) {
    x = a * b;
    alert("Произведение " + x);
} else if (a > 0 && b < 0 || a < 0 && b > 0) {
    y = a + b;
    alert("Сумма " + y);
}

//Задание 4

var x = +prompt("Введите число от 1 до 15");

switch (x) {
    case 1:
        console.log("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15");
        break;
    case 2:
        console.log("2 3 4 5 6 7 8 9 10 11 12 13 14 15");
        break;
    case 3:
        console.log("3 4 5 6 7 8 9 10 11 12 13 14 15");
    case 4:
        console.log("4 5 6 7 8 9 10 11 12 13 14 15");
        break;
    case 5:
        console.log("5 6 7 8 9 10 11 12 13 14 15");
        break;
    case 6:
        console.log("6 7 8 9 10 11 12 13 14 15");
        break;
    case 7:
        console.log("7 8 9 10 11 12 13 14 15");
        break;
    case 8:
        console.log("8 9 10 11 12 13 14 15");
        break;
    case 9:
        console.log("9 10 11 12 13 14 15");
        break;
    case 10:
        console.log("10 11 12 13 14 15");
        break;
    case 11:
        console.log("11 12 13 14 15");
        break;
    case 12:
        console.log("12 13 14 15");
        break;
    case 13:
        console.log("13 14 15");
        break;
    case 14:
        console.log("14 15");
        break;
    case 15:
        console.log("15");
        break;

}
// Мне кажется этот код, возможно, можно упростить как-нибудь, что бы не выводить каждое число вручную. Но я пока не знаю как.
//Может быть с помощью массива как-то.

//Задание 5




function D(a, b) {
    return a + b;
}
console.log(D(5, 3));

function F(a, b) {
    return a - b;
}
console.log(F(5, 3));

function G(a, b) {
    return a / b;
}
console.log(G(5, 3));

function H(a, b) {
    return a + b;
}
console.log(H(5, 3));

//Задание 6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "Сложение":
            return arg1 + arg2;
            break;
        case "Вычитание":
            return arg1 - arg2;
            break;
        case "Деление":
            return arg1 / arg2;
            break;
        case "Умножение":
            return arg1 * arg2;
            break;
    }
}
//Задание 8

function power(val, pow) {
    if (pow == 1) {
        return val
    } else {
        return val ** pow
    }
}
console.log(power(3, 2))

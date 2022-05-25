/* 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение. */
'use strict';
let arg1 = +prompt('Число 1');
let arg2 = +prompt('Число 2');
let operation = prompt('Введите математическую операцию: + - * ='); debugger;

alert(mathOperation(arg1, arg2, operation));

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "=":
            return division(arg1, arg2);
        default:
            alert('Не правильный ввод');
    }
}

/**
* Функция складывает переменные.
* @param {number} a число
* @param {number} b число
* @returns {number} Возвращает число
*/
function addition(a, b) {
    return a + b;
}
/**
* Функция вычитает переменные.
* @param {number} a число
* @param {number} b число
* @returns {number} Возвращает число
*/
function subtraction(a, b) {
    return a - b;
}
/**
* Функция умножает переменные.
* @param {number} a число
* @param {number} b число
* @returns {number} Возвращает число
*/
function multiplication(a, b) {
    return a * b;
}
/**
* Функция делит переменные.
* @param {number} a число
* @param {number} b число
* @returns {number} Возвращает число
*/
function division(a, b) {
    return a / b;
}

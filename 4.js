'use strict';
/* 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с 
двумя параметрами. Т.е. например, функция для сложения должна принимать два числа,
складывать их и возвращать результат. Обязательно использовать оператор return. */
let a = parseInt(+prompt("Число 1"));
let b = parseInt(+prompt("Число 2")); debugger;

/**
* Функция складывает переменные.
* @param {number} a число
* @param {number} b число
* @returns {number} Возвращает число
*/
function addition(a, b) {
    return a + b;
}
alert(addition(a, b));

/**
* Функция вычитает переменные.
* @param {number} a число
* @param {number} b число
* @returns {number} Возвращает число
*/
function subtraction(a, b) {
    return a - b;
}
alert(subtraction(a, b));

/**
* Функция умножает переменные.
* @param {number} a число
* @param {number} b число
* @returns {number} Возвращает число
*/
function multiplication(a, b) {
    return a * b;
}
alert(multiplication(a, b));

/**
* Функция делит переменные.
* @param {number} a число
* @param {number} b число
* @returns {number} Возвращает число
*/
function division(a, b) {
    return a / b;
}
alert(division(a, b));
//Дано некоторое число: 12345. Получите массив цифр этого числа.
let num = 12345;
let arr = Array.from(String(num), Number);
console.log(arr);
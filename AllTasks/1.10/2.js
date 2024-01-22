//Дано некоторое число: 12345. Выведите в консоль все его символы с конца.
let num = 12345;
let arr = Array.from(String(num), Number);
for (let i = 5; i>=0; i--){
    console.log(arr[i]);
}
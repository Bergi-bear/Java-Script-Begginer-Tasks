//Дано некоторое число: 12345. Найдите сумму цифр этого числа.
let num = 12345, sum =0;
let arr = Array.from(String(num), Number);
for (let i =0;i<5; i++ ){
    sum +=parseInt(arr[i]);
}
console.log(sum);
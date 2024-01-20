//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let sum = 0;
for (let num=1; num<101; num++){
    if (num%2>0) continue;
    sum+=num;
}
console.log(sum);
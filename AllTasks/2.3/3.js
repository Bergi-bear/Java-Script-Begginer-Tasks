//Даны числа, разделенные запятыми: '12,34,56'. Найдите сумму этих чисел.
let num = '14,35,50,11';
let arr=[];
let sum =0;
let k = 0;
let last=0
for (let i of num) {
    k++;
    if (i === ",") {
        arr.push(+num.slice(last,k-1));
        last=k
    }
}
arr.push(+num.slice(last,num.length));
for (let i of arr){
    sum+=i;
}
console.log(sum);
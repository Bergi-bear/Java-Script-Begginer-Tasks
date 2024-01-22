//Дан массив с числами. Найдите сумму положительных элементов этого массива.
let sum=0;
for (let i =0, num = [2,-3,2];i<num.length; i++ ){
    if (parseInt(num[i])<0) continue;
    sum +=parseInt(num[i]);
}
console.log(sum);
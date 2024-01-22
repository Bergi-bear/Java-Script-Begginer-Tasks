//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
let sum=0;
for (let i =0, num = [2,-3,2,10];i<num.length; i++ ){
    if (parseInt(num[i])<0)continue;
    if (parseInt(num[i])>9)continue;
    sum +=parseInt(num[i]);
}
console.log(sum);
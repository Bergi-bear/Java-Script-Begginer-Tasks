//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
let arr = [100,200,300], newArr=[]
for (let i=0; i<arr.length;i++){
    newArr[i]=parseInt(arr[i])+parseInt(arr[i])*0.1;

}
console.log(newArr);
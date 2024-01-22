//Заполните массив четными числами из промежутка от 1 до 100.
let arr = [];
for (let i=-1, j=1; i<49;j++){
    if (parseInt(j%2)>0)continue;
    else i++;
    arr[i]=j;
}
console.log(arr);
//Дан массив. Удалите из него элементы с заданным значением.
let arr = [1,2,1,3,"adc","def"];
let delItem = 1;
for(let i=0; i<arr.length;i++){
    if (arr[i]!==delItem) continue;
    arr.splice(i,1);
}
console.log(arr);
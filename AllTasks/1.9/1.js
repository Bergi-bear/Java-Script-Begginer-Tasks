//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
let arr = ["1312", "http://.acab","acab","why","http://.1312"];
for(let i=0; i<arr.length;i++){
    if (arr[i].slice(0,8)=="http://.") continue;
    arr.splice(i,1);
}
console.log(arr);
//splice(индекс начиная с которого мы хотим удалить элементы, количество элементов которые будут удалены
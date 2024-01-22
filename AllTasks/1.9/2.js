//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
let arr = ["1312", "acab.html","acab","1312.html"];
for(let i=0; i<arr.length;i++){
    if (".html"==arr[i].slice(String(arr[i]).length-5, String(arr[i]).length)) continue;
    arr.splice(i,1);
}
console.log(arr);
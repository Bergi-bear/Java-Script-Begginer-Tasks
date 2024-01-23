//Дана строка. Удалите предпоследний символ из этой строки.
let str = "ляляля";
let arr = [...str];
arr.splice(arr.length-2,1);
console.log(arr.join(""));
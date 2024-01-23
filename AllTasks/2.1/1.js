//Дана некоторая строка. Найдите позицию первого нуля в строке.
let str = "12034";
for(let i=0;i<str.length;i++){
    if(str[i]!=="0") continue;
    else {console.log(str[i], "находится на позиции", i)}break;
}
//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
let str = "abc123";
let arr=[];
for (let i of str){
    if (isNaN(str[i]))continue;
    else {
        console.log("первая цифра находится на позиции",i);
    }
}
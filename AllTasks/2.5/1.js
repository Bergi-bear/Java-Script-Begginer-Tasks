//Дана некоторая строка, например, вот такая: '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.
let str = "023m0df0dfg0";
let arr0 = [];
for (let i=0;i<str.length;i++){
    if(str[i]==0){
        arr0.push(i);
    }
}
console.log(arr0);
//Дана некоторая строка: 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'
let str = 'abcdefg';
let arr =[...str];
for (let i=3;i<str.length;i+=2){
    arr=str.splice(i,1)
}
console.log(arr)
//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
let str = "оливьешка";
let arr = [];
for (let i = str.length; i>0; i--){
    console.log(str[i-1]);
    arr.push(str[i-1]);
}
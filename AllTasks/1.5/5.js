//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
let str = "оливьешка";
console.log(str.slice(-1));
for (let sym1=-2, sym2 = -1;; sym1--,sym2--){
    if (str.slice(0,1)===str.slice(sym1,sym2))break;
    console.log(str.slice(sym1,sym2));
}
console.log(str.slice(0,1));
//не работает если первая и две последние буквы одинаковые




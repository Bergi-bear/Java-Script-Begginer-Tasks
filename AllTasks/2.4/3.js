//Дано число. Выведите в консоль количество четных цифр в этом числе.
let num = "1488";
let arr=[];
for(let i=0;i<num.length;i++){
    if (num[i]%2==0){
        arr.push(num[i]);
    }
}
console.log(arr.length);
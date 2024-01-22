//Заполните массив случайными числами из промежутка от 1 до 100.
let arr = [];
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i =0; i<100;i++){
    arr[i]=getRandomInRange(1,100);
}
console.log(arr);
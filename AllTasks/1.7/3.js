//Дано некоторое число: 12345. Переверните его: 54321
//join() - объеденяет элементы массива
let num = 12345;
let arr = Array.from(String(num), Number), newArr=[]; //преобразовала число в массив
for (let i=arr.length; i>0;i--){
    newArr.push(arr[i-1]);
}
console.log(parseInt(newArr.join(""))); //преобразовала массив в строку, потом в число

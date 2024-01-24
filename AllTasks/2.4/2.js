//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
let arr = ["abc",123,"cba",321];
let arr1=[],arr2=[];
for (let i=0;i<arr.length;i++){
    arr1.push(i)
    arr2.push(arr[i]);
}
console.log(arr1,"\n",arr2);
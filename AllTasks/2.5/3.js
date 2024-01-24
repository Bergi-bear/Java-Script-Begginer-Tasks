//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
let arr = [1, 2, 3, 4, 5, 6]
let arrEven=[]
let arrOdd = []
let sumArrEven=0,sumArrOdd=0
for (let i=0;i<arr.length;i++){
    if (i%2==0){
        arrEven.push(arr[i])
    }
    else arrOdd.push(arr[i])
}
for (let i=0;i<arrEven.length;i++){
    sumArrEven+=arrEven[i]
}
for (let i=0;i<arrOdd.length;i++){
    sumArrOdd+=arrOdd[i]
}
console.log(sumArrEven/sumArrOdd)
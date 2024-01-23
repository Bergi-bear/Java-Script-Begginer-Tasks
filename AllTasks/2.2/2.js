//Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [-9,-3,-4,-6,1,2,1,-5,3,-7,-1,9];
let newArr = []
for(let i=0,j=0; i<arr.length;i++){
    if (arr[i]>0) {
        newArr[j]=arr[i];
        j++
    }
}
console.log(newArr);
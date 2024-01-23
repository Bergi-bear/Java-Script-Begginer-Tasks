//Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]. Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
let arr = [1,2,3,4,5,6];
let arr1=0, arr2=0;
let dividedArr;
for (let i=0, j=Math.round(arr.length/2); j<arr.length; i++,j++){
arr1+=arr[i];
arr2+=arr[j];
dividedArr=arr1/arr2;
}
console.log(dividedArr);
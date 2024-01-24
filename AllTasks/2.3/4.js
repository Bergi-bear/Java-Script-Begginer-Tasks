//Дана дата в следующем формате: '2025-12-31'
// Преобразуйте эту дату в следующий объект:
//{
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
let num = "2025-12-31"
let arr=[];
let sum =0;
let k = 0;
let last=0;
for (let i of num) {
    k++;
    if (i === "-") {
        arr.push(+num.slice(last,k-1));
        last=k
    }
}
arr.push(+num.slice(last,num.length));
console.log("year:",arr[0],"\nmonth:",arr[1],"\nday:",arr[2]);
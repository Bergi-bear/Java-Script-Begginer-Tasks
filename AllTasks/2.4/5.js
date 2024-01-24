//Дана некоторая строка со словами: 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'
let num = "привет как дела";
let arr=[];
let k = 0;
let last=0
let upper=[];

for (let i of num) {
    k++;
    if (i === " ") {
        arr.push(num.slice(last,k-1));
        last=k
    }
}
arr.push(num.slice(last,num.length));

for (let i of arr) {
    let tmp = i[0].toUpperCase() + i.slice(1, i.length);
    upper.push(tmp);
}
console.log(upper.join(" "));
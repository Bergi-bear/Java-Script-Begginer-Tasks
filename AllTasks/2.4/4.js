//Дана некоторая строка: 'abcde'
//Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'
let str = "abcde";
let newStr=[];
for(let i=0;i<str.length;i++){
    if(i%2==0){
        newStr.push(str[i].toUpperCase())
    }
    else {
        newStr.push(str[i]);
    }
}
console.log(newStr.join(""));
//str.toUpperCase()-верхний регистр
//str.toLowerCase()-нижний регистр
//Дана некоторая строка. Найдите позицию третьего нуля в строке.
let str = "01200340"
let num = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") continue;
    //else if (num<4) num++;
    else {
        num++
        if (num === 3) {
            console.log("третий", str[i], "находится на позиции", i)
        }
    }
}

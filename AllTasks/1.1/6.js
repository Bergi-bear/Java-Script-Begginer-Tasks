//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
let str = "абвгдь";
no = "ь";
if (str.slice(-1) === no) {
    console.log(str.slice(-2, -1));
}
else console.log(str.slice(-1));

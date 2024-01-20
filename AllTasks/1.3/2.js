//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
let num1 = 6, num2 = 2, division;
division=num1%num2;
if (division>0){
    console.log("Числа",num1,"и",num2, "делятся с остатком")
}
else console.log("Числа",num1,"и",num2, "делятся без остатка")

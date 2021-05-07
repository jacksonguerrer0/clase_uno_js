/*usando document.getElementByid, innerHTML y style.fontSize con js*/
function enviar(){
    document.getElementById("demo").innerHTML = "Hola JavaScript";
    document.getElementById("demo2").style.fontSize = "70px";
}
/*uso de display para mostrar y ocultar con js */
function Mostrar(){
   document.getElementById("elemento2").style.display = "";
}
function Ocultar(){
   document.getElementById("elemento2").style.display = "none";
}
/* Uso de document.querySelector para agregar fondo */
function myFuncion(){
   document.querySelector("p").style.background = "blue";
}
/*Mostrando la cantidad elementos con clase .e*/
function cantidad(){
   var x = document.querySelectorAll(".e");
   document.getElementById("paragraph").innerHTML = x.length;
}
//condicional simple : toma de decision (alert)
let numUno = 5;

Simple(numUno);

function Simple (variable){
    if(variable < (4+2)){
        alert("El condicional es verdadero");
    }
}
//Condicionales dobles - Elegir entre dos opciones
var num1 = 4;
var num2 = 3;

if (num1 > num2) {
    document.write("<br> El número 1 es mayor");
}else{
    document.write("<br>El núrmero 2 es mayor");
}

//Condicionales multiples - Elegir entre muchas opciones
var num1 = 3;
var num2 = 3;

if (num1 > num2) {
    document.write("<br>El número 1 es mayor");
}else if(num1<num2){
    document.write("<br>El núrmero 2 es mayor");
}else{
    document.write("<br>Son iguales"); 
}
/*ejercicio 1 del banco*/
var cap_inv, gan;
cap_inv = 150000;
gan = 0;

gan = cap_inv * 0.02;
document.write("<br>La ganancia es de: " + gan);

//ejercicio 2 porcentaje de hombres y mujeres en un grupo - suponiendo que es un grupo de 40 con 15 hombres
var men, women, group, porcentajeMen, porcentajeWomen;
group = 40;
men = 15;
women = group - men;
porcentajeMen = 0;
porcentajeWomen = 0;

porcentajeMen = men / (group / 100);
porcentajeWomen = 100 - porcentajeMen;
document.write("<br>El procentaje de hombres es: " + porcentajeMen);
document.write("<br>El procentaje de mujeres es: " + porcentajeWomen);

//ejercicio 3 calculo de edad - suponiendo que nacio en el 1999
var birthYear, age, year;
birthYear = 1999;
year = 2021;
age = 0;

age = year - birthYear;
document.write("<br>Tu edad es: " + age);

//ejercicio 4 desceunto de tienda- suponiendo que la compra es de 250000
var totalPurchase, totalDiscount, totalPay;
totalPurchase = 250000;
totalDiscount = 0;
totalPay = 0;

totalDiscount = (totalPurchase * 15 )/100;
totalPay = totalPurchase - totalDiscount;
document.write("<br>Debes pagar: " + totalPay);


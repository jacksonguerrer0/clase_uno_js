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
/*ejercicio 1 del banco*/
var cap_inv, gan;
cap_inv = 150000
gan = 0;
//ejercicio 2 porcentaje de h y m
//ejercicio 3 calculo de edad
//ejercicio 4 desceunto de tienda
gan = cap_inv * 0.02;
document.write("La ganancia es de: " +gan);
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
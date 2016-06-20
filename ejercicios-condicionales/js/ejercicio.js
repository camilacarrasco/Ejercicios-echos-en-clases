//ejercicio.js
//ejercicio1

//ejercicio2
var numero1;
var numero2;

var numero1=prompt(" ingrese primer numero","");
var numero2=prompt("ingrese segundo numero","");

if (numero1 > numero2)
{
	alert(numero1 + "Es mayor");
}
if (numero2 < numero1)
{
    alert(numero2 +  "Es menor");
}
//ejercicio3
/*
var numero1;
var numero2;

var numero1= prompt(" ingrese primer numero", "");
var numero2= prompt(" ingrse segundo numero", "");
if (numero1 >= 0 );
{
	alert(numero1 + "es positivo");
}
if (numero2 < 0 );
{
	alert(numero2 + "es negativo");
}*/
//ejercicio4

//ejercicio5
//ejercicio6
//ejercicio7
//ejercicio8
//ejercicio9
var sencilla= 20.00;
var doble= 25.00;
var triple= 28.00;
var cargo= 5;
var cobrar;
var cantidad;
var tipo_hamburguesa;
var tipo_pago;

cantidad=prompt("ingrese cantidad","");
tipo_hamburguesa= prompt("elija","");
if(tipo_hamburguesa ==sencilla*cantidad)
{
	cobrar= sencilla*cantidad
}
else if(tipo_hamburguesa==doble)
{
	cobrar= doble*cantidad;
}
else
{
	cobrar=triple*cantidad;
}
tipo_pago=prompt("tipo de pago","");
if (tipo_pago=="credito")
{
	cobrar=cobrar*cargo;
}
alert("cobrar * tipo_hamburguesa");

function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var cantidad;

while (contador < 5)

{ contador = contador +1;

cantidad=prompt("ingrese un numero" + contador);


while ( isNaN( cantidad ) )

	{ cantidad=prompt("ingrese un numero"); }

cantidad= parseInt(cantidad);

acumulador = acumulador + cantidad; 
}

 document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
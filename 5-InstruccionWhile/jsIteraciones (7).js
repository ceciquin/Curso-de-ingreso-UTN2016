function Mostrar()
{	
var contador=0;
var acumulador=0;
var respuesta='si';// para seguir sumando numeros o no.
var numero;

while( respuesta=='si')

	{ contador++;

	numero=prompt('ingrese un numero'+ contador);

	while( isNaN(numero))

	{ numero= prompt('ingreso invalido. ingrese por favor un numero.' + contador);}

		
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt("¿Desea continuar? Escriba si o no: ");


	while( respuesta!='si' && respuesta!='no')

	{  respuesta= prompt('ingreso invalido. ¿Desea continuar? Escriba si o no: '); }

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
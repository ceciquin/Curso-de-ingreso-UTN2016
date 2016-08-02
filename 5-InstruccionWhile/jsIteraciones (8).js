function Mostrar()
{ var contador=0;
	var positivo=0;
	var negativo=0;
	var respuesta='si';
	var numero;



	while( respuesta=='si')

		{ contador++;

			numero=prompt('ingrese un numero ' + contador);

			while(isNaN(numero)==true)

				{ numero=prompt('ingreso invalido. ingrese un valor numerico ' + contador);}

			respuesta=prompt('¿desea ingresar otro numero?')

			while( respuesta != 'si' && respuesta!='no')

				{ numero=prompt('debe ingresar si o no . ');}

			acumulador=prompt('ingrese un numero ' + contador);

			if(acumulador>0)

				{positivo=parseInt(acumulador)+ parseInt(positivo);}

			else

				{negativo= parseInt(acumulador)*parseint(negativo);}

		}
		document.getElementById('suma').value=positivo;
		document.getElementById('promedio').value=negativo;

	/*var contador=0;
var positivo=0;
var negativo=0;
var numero;	
var respuesta='si';

acumulador = prompt("Ingresa un numero:");

	while(respuesta == "si"){

		contador++;

		if(acumulador >=0){

			positivo = parseInt(positivo) + parseInt(acumulador);
		

		} else if (acumulador < 0){

			negativo = parseInt(positivo) * parseInt(acumulador);
		}


		respuesta = prompt("Desea ingresar otro numero?");

		if(respuesta == "no"){
			break;
		}
			else {
				acumulador = prompt("Ingrese un numero:");
				continue;
			}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;*/


}//FIN DE LA FUNCIÓN
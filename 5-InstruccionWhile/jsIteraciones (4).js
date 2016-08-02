function Mostrar()
{ 

	/*var numero = prompt("ingrese un número entre 0 y 9.");

	while(numero < 0 || numero >= 10)
	{

		numero = prompt("Ingrese un numero nuevamente entre el 0 y el 9");

	} 

	document.getElementById('Numero').value = numero;*/









	var Numero= prompt("ingrese un numero entre 0 y 9");



	while( Numero < 0 || Numero > 10)

		{ 
			Numero= prompt("ingrese un numero entre 0 y 9");
		}



	document.getElementById('Numero').value= "el numero que eligio es el " + Numero;

	


	/*var numero= prompt(" ingrese un numero entre 10 y 0");

	while( numero>10 || numero<0)

		{ numero= prompt(" ingrese un numero entre 10 y 0");} */


}//FIN DE LA FUNCIÓN
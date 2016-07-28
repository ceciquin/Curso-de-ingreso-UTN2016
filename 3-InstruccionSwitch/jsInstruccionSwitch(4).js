function Mostrar()
{
var mes = document.getElementById('mes').value;

switch( mes)

{ 	case "Enero":
	case"Marzo":
	case"Mayo":
	case "Julio":
	case "Agosto":
	case"Octubre":
	case"Diciembre":
	
			alert( "tiene 31 dias");

			break;

	case"Febrero":

			alert("tiene 28 dias");

			break;

	case"Abril":
	case"Junio":
	case"Septiembre":
	case"Noviembre":

			alert("tiene 30 dias");

			break;

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN
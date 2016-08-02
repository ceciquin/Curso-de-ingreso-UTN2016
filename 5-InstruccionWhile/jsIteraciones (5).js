function Mostrar()
{

var sexo= prompt("Ingrese su sexo, f para femenino o m para masculino.");

	while(sexo!="f" && sexo!= "m")

	{ sexo=prompt(" El valor ingresado es incorrecto: Ingrese  f para femenino o m para masculino.");}


	document.getElementById('Sexo').value=" ah ingresado " + sexo;




}//FIN DE LA FUNCIÓN
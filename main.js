function calcular()
{
	var n1 = document.getElementById("numa").value;
	var n2 = parseInt(document.getElementById("numb").value);
	var salida = document.getElementById("salida");
	var negative;

	if (n1 < 0 && n2 < 0 ) 
	{
		negative=true;
		if (negative) 
			{
				salida.innerHTML = "1";			}
		
	}
	else if (n1 > 0 && n2 > 0 ) 
	{
		negative=false;
		if (!negative) 
			{
				document.getElementById("mensaje").innerHTML = '<div class="alert alert-danger">Numeros Positivos</div>';
				salida.innerHTML = "0";
			}
	}
	else 
	{
		salida.innerHTML = "1";
		;
	}


}
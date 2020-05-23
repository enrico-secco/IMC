
var peso;
var altura;
var imc;
var resultado;

function calcular(){

	peso = document.getElementById("peso").value;
	altura = document.getElementById("altura").value;
	imc= peso/(altura*altura);

	if(imc < 17){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = "<br/> Seu IMC: " + imc.toFixed(2) + "<br/><h3> Muito abaixo do peso</h3><br/>";
		document.getElementById('peso').value = ""; //limpar 
		document.getElementById('altura').value = "";
		return false; // pra não enviar e mostrar na tela.
	}else if(imc >= 17 && imc < 18.49){
	resultado = document.getElementById('resultado');
		resultado.innerHTML = "<br/> Seu IMC:  " + imc.toFixed(2) + "<br/><h3>Abaixo do peso</h3><br/>";
		document.getElementById('peso').value = ""; //limpar 
		document.getElementById('altura').value = "";
		return false; // pra não enviar e mostrar na tela.
	}else if(imc > 18.5 && imc < 24.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = "<br/> Seu IMC:  " + imc.toFixed(2) + "<br/><h3>Peso Ideal</h3><br/>";
		document.getElementById('peso').value = ""; //limpar 
		document.getElementById('altura').value = "";
		return false; // pra não enviar e mostrar na tela.
	} else if(imc > 25 && imc < 29.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = "<br/> Seu IMC: " + imc.toFixed(2) + "<br/><h3>Acima do peso</h3>" + "<h3>Obesidade grau I</h3>";
		document.getElementById('peso').value = ""; //limpar 
		document.getElementById('altura').value = "";
		return false; // pra não enviar e mostrar na tela.
	} else if(imc > 30 && imc < 39.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = "<br/>Seu IMC: " + imc.toFixed(2) + "<br/><h3>Obesidade</h3>" + "<h3>Obesidade grau II</h3>";
		document.getElementById('peso').value = ""; //limpar 
		document.getElementById('altura').value = "";
		return false;
	}else if(imc > 40){
		resultado = document.getElementById('resultado');
		resultado.innerHTML =  "<br/>Seu IMC: " + imc.toFixed(2) + "<br/><h3>Obesidade Grave</h3>" + "<h3>Obesidade grau III</h3>";
		document.getElementById('peso').value = ""; //limpar 
		document.getElementById('altura').value = "";
		return false;
	}else{
		return false;
	}
}
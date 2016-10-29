function validateForm(){
	
	var nombre=document.getElementById("name");
	var apellido =document.getElementById("lastname");
	var email = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password");
	var indice=document.getElementById("opciones").selectedIndex;


	
	function valor(){
		
		if(valor == null || valor.length == 0 || /^\s+$/.test(valor)){
			alert("todos los campos son obligatorios, exepto los dos ultimos");
			return false;
		}
	}
	valor();

	function valida_nombre(){
		if(nombre.value.charAt(0).toUpperCase()!== nombre.value.charAt(0)){
			alert ("ingresar Nombre con inicial en Mayúscula");
			return false;

		}else if(/^^[A-Z]*$/.test(nombre.value) == false){
			alert ("Favor ingresar solo letras");
		}    
	}
	valida_nombre();

	function valida_apellido(){
		if(apellido.value.charAt(0).toUpperCase()!== apellido.value.charAt(0)){
			alert ("ingresar apellido con inicial en Mayúscula");
			return false;

		}else if(/^^[A-Z]*$/.test(apellido.value) == false){
			alert ("Favor ingresar solo letras");

		}    
	}
	valida_apellido();
	

	
	
	function valida_mail(){

		var expresion = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if( !expresion.test(email) ) {
			alert(" correo inválido, fomato de correo valido Ej: name@domain.com ");
			;
			return false;
		}
	}
	valida_mail();	


	
	function contraseña(){

		if (pass.value.length < 6){
			alert("tu contraseña no es valida, debe conterner almenos 6 caracteres.");
			return false;
		} else if (pass.value=="password"){
			alert("tu contraseña no puede ser password ");
			return false;	
		} else if (pass.value=="123456"){
			alert("tu contraseña no puede ser 123456");
			return false;
		} else if (pass.value=="098754"){
			alert("tu contraseña no puede ser 098754");
			return false;
		}
	}
	contraseña();


	function seleccion(){
		if( indice == null || indice == 0 ) {
			alert("debes seleccionar una bici")
			return false;
		}
	}
	seleccion();

}






const fnValidar10 = () => {
	
	var elementoPref = document.getElementsByName("chkPre");
    var contador = 0;

    for (var i=0; i<elementoPref.length; i++) {
        if(elementoPref[i].checked) {
            contador++ ;
        }
    }

    if(contador < 2){
        alert("Debe elegir minimo 2 opciones... NO ("+ contador +")");
        return false;
    }

	
	let xTexto = document.getElementById("txtNombre").value;
	if(xTexto=="" || /^\s+$/.test(xTexto)) {
		alert("Falta NOMBRE y APELLIDO...");
		return false;
	}

	let xNumero = document.getElementById("txtEdad").value;
	if(xNumero== "") {
		alert("Falta EDAD...");
		return false;
	}

	/// Caso contrario ///
	return true;	
}
const fnValidar02 = () => {
    let xPreferencia = document.getElementById("lstPreferencias").value;
    if(xPreferencia=="" || /^\s+$/.test(xPreferencia)) {
        alert("Falta seleccionar PREFERENCIA...");
        return false;
    }

    let xNumero = document.getElementById("1stMes").value;
	if(xNumero== "") {
		alert("Falta seleccionar MES actual...");
		return false;
	}

    /// Caso contrario ///
    return true;	
}
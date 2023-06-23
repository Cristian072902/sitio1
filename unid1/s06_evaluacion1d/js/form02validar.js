function fnMinPreferencia() {
   
    let preferencias = document.getElementsByName("preferencia");
    let contador = 0;
    for (let i = 0; i < preferencias.length; i++) {
        if (preferencias[i].checked) {
            contador++;
        }
    }

    if (contador < 3) {
        alert("Seleccione al menos 3 preferencias");
        return false;
    }


    let xTexto = document.getElementById("txtTexto").value;
    if (xTexto == "" || /^\s+$/.test(xTexto)) {
        alert("Escriba texto");
        return false;
    }
    return true;


}

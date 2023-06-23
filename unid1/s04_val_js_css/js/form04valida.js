const fnValidar04 = () => {

    var elementoPref = document.getElementsByName("chkPre");
    var contador = 0;

    for (var i=0; i<elementoPref.length; i++) {
        if(elementoPref[i].checked) {
            contador++ ;
        }
    }

    if(contador !=2){
        alert("Debe elegir 2 opciones... NO ("+ contador +") opciones");
        return false;
    }
}
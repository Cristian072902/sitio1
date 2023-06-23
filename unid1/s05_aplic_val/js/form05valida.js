function fnValidar05()
{
    var xTurno = document.getElementById("lstTurno").value;
    if (xTurno=="" || /^\s+$/.test(xTurno)){

        alert("Seleccione TURNO...");
        return false;
    }
    var xResult = document.getElementById("txtResult").value;
    if(xResult=="" || xResult== 0){

        alert("Revise... Resultado ¿0 o vacio?");
        return false; 
    }
    return true;
	 
}

function verConteo(turno, mtzAlumnos)
{
    contadorTurno = 0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[3]==turno){
                contadorTurno++;
            }
            
        });
        /*for(var i= 0; i< mtzAlumnos.length; i++){
            mtzTurno = mtzAlumnos[i][3];
            if(mtzTurno == turno){
                contadorTurno++;
            }
        }*/
    }
    document.getElementById("txtResult").value = contadorTurno;
	
}
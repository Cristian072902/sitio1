function fnValidar06()
{
    var genero = document.getElementById("genero").value;
    if (genero=="" || /^\s+$/.test(genero)){

        alert("Seleccione GENERO...");
        return false;
    }
    var xResult = document.getElementById("txtResult").value;
    if(xResult=="" || xResult== 0){

        alert("Revise... Resultado ¿0 o vacio?");
        return false; 
    }
    return true;
	 
}

function verConteo(genero, mtzAlumnos)
{
    contadorGenero = 0;
    if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element[4]==genero){
                contadorGenero++;
            }
            
        });
        /*for(var i= 0; i< mtzAlumnos.length; i++){
            mtzTurno = mtzAlumnos[i][3];
            if(mtzTurno == turno){
                contadorTurno++;
            }
        }*/
    }
    document.getElementById("txtResult").value = contadorGenero;
	
}
function fnValidar02()
{
    let xNombre = document.getElementById("txtNombres").value;
    if (xNombre == "" || /^\s+$/.test(xNombre)) {
        alert("escriba su nombre");
        return false;
    }

    let xApellido = document.getElementById("txtApellidos").value;
    if (xApellido == "" || /^\s+$/.test(xApellido)) {
        alert("escriba su apellido");
        return false;
    }




    return true;   
}
function verTablas(turnoElegido, generoElegido, mtzAlumnos) {
    var orden = 0;
    var t01 = "<table>";
    t01 += "<tr>";
    t01 += "<th class='titulo' colspan='3'>Datos personales</th>";
    t01 += "</tr>";
    t01 += "<tr>";
    t01 += "<th>No.</th> <th>Apellidos y Nombres</th> <th>Género</th>";
    t01 += "</tr>";

    if (mtzAlumnos.length > 0) {
        for (var i = 0; i < mtzAlumnos.length; i++) { //i=contador Es un salto entre los elementos de la lista. Asi revisa lo que tiene ubicandolos por posiciones que empieza desde 0.
            var turnoMtz = mtzAlumnos[i][3]; // Turno
            var generoMtz = mtzAlumnos[i][4]; // Género

            if ((turnoMtz === turnoElegido ) && (generoMtz === generoElegido  )) {
                orden++;
                var apeNom = mtzAlumnos[i][2] + ", " + mtzAlumnos[i][1];
                var genero = fnGenero(generoMtz);

                t01 += "<tr>";
                t01 += "<td>" + orden + "</td> <td>" + apeNom + "</td> <td>" + genero + "</td>";
                t01 += "</tr>";
            }
        }
    }

    t01 += "</table>";
    document.getElementById("marco").innerHTML = t01;
}

function fnGenero(generoMtz) {
    if (generoMtz === "M") {
        return "Masculino";
    } else if (generoMtz === "F") {
        return "Femenino";
    } else {
        return "No especificado";
    }
}

function borrarMarco() {
    document.getElementById("marco").innerHTML = "Resultado borrado...";
}
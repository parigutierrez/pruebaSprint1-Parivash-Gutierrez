var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return lista;



}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

  var lista = [];
    function estudiante(nombre, puntosTecnicos, puntosHSE){
      this.nombre = nombre;
      this.puntosTecnicos = puntosTecnicos;
      this.puntosHSE = puntosHSE;
//Crear nuevo objeto
    };

  for (i=0;i<3;i++){
    estudiante.nombre = prompt("Ingresa el nombre de la estudiante " + i);
    estudiante.puntosTecnicos = prompt("Ingresa los puntos técnicos");
    estudiante.puntosHSE = prompt("Ingresa los puntos HSE");
    lista += estudiante.push;
    //iterar para pedir datos de las alumnas
  }

  return lista;


}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var arregloEstudiantes = []; // arreglo para almacenar estudiantes
    for (i=0;i<3;i++){
        arregloEstudiantes[i] = estudiante[i]
      += arregloEstudiantes;
    }


}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    for (i=0;i<=estudiantes.length;i++){
      if (nombre === estudiante.nombre.toLowerCase){
        return estudiante[i];
      }
    }

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var temporal = [];
    for (i=0;i<3;i++){
        if (estudiante.puntosTecnicos[i]<estudiante.puntosTecnicos[i+1]){
          temporal[i] = estudiante[i+1];
        }
        else {
          temporal[i] = estudiante[i];
        }
      += temporal;
    }

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var temporal = [];
    for (i=0;i<3;i++){
        if (estudiante.puntosHSE[i]<estudiante.puntosHSE[i+1]){
          temporal[i] = estudiante[i+1];
        }
        else {
          temporal[i] = estudiante[i];
        }
      += temporal;
    }
}

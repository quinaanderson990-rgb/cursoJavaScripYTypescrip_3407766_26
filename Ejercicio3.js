//Tercer ejercicio en la terminal

//Arreglo de los estudiantes
const estudiantes = [
    { nombre: "Anderson", nota: 8.5 },
    { nombre: "johan", nota: 9.2 },
    { nombre: "chantre", nota: 7.8 },
    { nombre: "Andrian", nota: 6.5 },
    { nombre: "Ronaldinho", nota: 9.0 },
    { nombre: "cristiano", nota: 9.5 }
];

//Variables
let sumaNotas = 0;
let notaMaxima = 0;
let notaMinima = 10;
let aprobados = 0;

//Recorrer el arreglo de estudiantes
for (const estudiante of estudiantes) {
    let estado;
    
    if (estudiante.nota >= 7) {
        estado = "Aprobado";
        aprobados++;
    } else {
        estado = "Reprobado";  
    }

    console.log("nombre:", estudiante.nombre);
    console.log("nota:", estudiante.nota);
    console.log("estado:", estado);
    console.log("-------------------------");

    //Calculsr suma de notas
    sumaNotas = sumaNotas + estudiante.nota;

    if (estudiante.nota > notaMaxima) {
        notaMaxima = estudiante.nota;
    }

    if (estudiante.nota < notaMinima) {
        notaMinima = estudiante.nota;
    }

}

//Calcular promedio
let promedio = sumaNotas / estudiantes.length;

//Mostrar resultados finales
console.log("======== RESULTADOS FINALES ========");
console.log("Promedio de notas:", promedio.toFixed(2));
console.log("Nota máxima:", notaMaxima);
console.log("Nota mínima:", notaMinima);
console.log("Cantidad de aprobados:", aprobados);
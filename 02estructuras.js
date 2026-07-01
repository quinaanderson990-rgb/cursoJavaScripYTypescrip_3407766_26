//ciclos for, while, do-while
//1. Estructura for  cuando se sabe cuantas veces repetir el ciclo
for (let i = 0; i < 5; i++) {
    console.log('Iteración de número:', i);
    
}

//while
let intentos = 0;
const MAX_INTENTOS = 5;

while (intentos < MAX_INTENTOS) {
    console.log('Intento', intentos+1, 'de', MAX_INTENTOS);
    intentos++;
}

//break y continue
for (let i = 0; i < 10; i++) {
    if (i === 4) continue;
    if (i===7) break;
    console.log(i);
 }
    
//funciones
//funcion clasica
function saludar(nombre) {
    return `Hola tu nombre es, ${nombre}`;
}

console.log(saludar("Ana Maria"));

//2. Funcion anonima asignada a variable, no tiene nombre propio, se guarda en una variable
let calcularArea = function(base, altura){
    return base*altura;
}
console.log(calcularArea(6,8));

//3. funciones arrow
let sumar = (val1, val2)=> val1+val2;
console.log(sumar(12000, 45000));

//4. parametros
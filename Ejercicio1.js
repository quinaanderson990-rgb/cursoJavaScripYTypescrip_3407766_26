//Primer ejercicio en la Terminal

//Datos de la persona o cliente
let nombre = "Anderson";
let peso = 6;
let ciudad = "Popayan";

//Variable
let tarifa = 0;

//Calcular la tarifa de envio segun el peso
if (peso <= 4) {
    tarifa = 10000;
}else if (peso >= 4 && peso <= 8) {
    tarifa = 17000;
}else {
    tarifa = 27000;     
}

//Operador ternario
let recarga = ciudad === "Popayan" ? 5000 : 10000;

//Total
let total = tarifa + recarga;

//Mostrar el resultado
console.log("==== FACTURA DE ENVIO ====");
console.log("Nombre: " + nombre);
console.log("Peso: " + peso + " kg");
console.log("Ciudad: " + ciudad);
console.log("Tarifa de envío: $" + tarifa);
console.log("Recarga: $" + recarga);
console.log("Total: $" + total);

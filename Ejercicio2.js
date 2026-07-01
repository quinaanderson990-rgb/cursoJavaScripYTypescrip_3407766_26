//Segundo ejercicio en la terminal

//Datos del afiliado
let nombre = "Anderson";
let edad = 20;
let plan = "Premium";

//Variables
let nombrePlan = "";
let planDeValor = 0;
let descuento = 0;
let total = 0;

//Determinar el plan
switch (plan) {
    case 1:
    nombrePlan = "Básico";
    planDeValor = 10000;
    break;
    case 2:
    nombrePlan = "Estándar";
    planDeValor = 20000;
    break;
    case 3:
    nombrePlan = "Premium";
    planDeValor = 30000;
    break;
    default:
    console.log("Plan no válido");
}

//Solo realiza el calculo si el plan es válido
if (planDeValor > 0) {
    //Calcular descuento
    if (edad < 18) {
        descuento = planDeValor * 0.20; // 20% de descuento
    } else if (edad >= 50 && edad <= 89) {
        descuento = planDeValor * 0.30; // 30% de descuento
    } else {
        descuento = 0; // Sin descuento
    }

    //Calcular total
    total = planDeValor - descuento;

    //Mostrar resultado
    console.log("========GIMNASIO========");
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("Plan: " + nombrePlan);
    console.log("Valor del plan: $" + planDeValor);
    console.log("Descuento: $" + descuento);
    console.log("Total a pagar: $" + total);
}   
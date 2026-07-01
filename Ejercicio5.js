//Quinto ejercicio en la terminal

let nombre = "Anderson";
let saldo = 60000;
let retiro = 20000;

//proceso de retiro
function procesarRetiro(nombre, saldo, retiro) {
    if (retiro <= 0) {
        return {
            mensaje: "El monto de retiro debe ser mayor a cero.",

        };
    }
    if (saldo >= retiro) {
        let nuevoSaldo = saldo - retiro;

        return {
            nombre: nombre,
            saldoAnterior: saldo,
            montoRetirado: retiro,
            nuevoSaldo: nuevoSaldo,
            mensaje: "Retiro exitoso."
        };
    } else {
        let falta = retiro - saldo;
        
        return {
            nombre:nombre,
            saldoDisponible:saldo,
            falta:falta,
            mensaje:"saldo insuficiente"
        };
    }
}

let resultado = procesarRetiro(nombre, saldo, retiro);
 
console.log(resultado.mensaje);

if (resultado.nuevoSaldo != undefined) {

    console.log("nombre:", resultado.nombre);
    console.log("saldo anterior:", resultado.saldoAnterior);
    console.log("monto retirado:", resultado.montoRetirado);
    console.log("nuevo saldo:", resultado.nuevoSaldo);
} else if (resultado.falta != undefined) {

    console.log("nombre:", resultado.nombre);
    console.log("saldo disponible:", resultado.saldoDisponible);
    console.log("falta:", resultado.falta);
}
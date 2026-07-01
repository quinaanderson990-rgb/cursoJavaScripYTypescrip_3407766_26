//Cuarto ejercicio en la terminal

const ventas = [
    { día: "lunes", vendedor: "Anderson", unidadesVendidas: 10, totalVenta: 100000 },
    { día: "martes", vendedor: "Johan", unidadesVendidas: 5, totalVenta: 50000 },
    { día: "miércoles", vendedor: "Chantre", unidadesVendidas: 8, totalVenta: 80000 },
    { día: "jueves", vendedor: "Andrian", unidadesVendidas: 12, totalVenta: 120000 },
    { día: "viernes", vendedor: "Ronaldinho", unidadesVendidas: 15, totalVenta: 150000 },
    { día: "sábado", vendedor: "Cristiano", unidadesVendidas: 20, totalVenta: 200000 }
];

//Calculo total de la semana
function calcularTotalSemana() {
    return ventas.reduce((total, venta) => total + venta.totalVenta, 0);
}

//Saber el dia con mayor venta
function diaMayorVenta() {
    return ventas.reduce((mayor, venta) => {
        if ( venta.totalVenta > mayor.totalVenta) {
            return venta;
        } else {
            return mayor;
        }
    });
}

//mostrar los dias con mas de 10 unidades vendidas
function diasMasDe10Unidades() {
    return ventas.filter(venta => venta.unidadesVendidas > 10);
}

//imprimir el reporte
function imprimirReporte() {

    console.log("==== REPORTE DE SEMANAL ====");
    console.log("Total de ventas de la semana: $" + calcularTotalSemana());

    let mejorDia = diaMayorVenta();

console.log("");
    console.log("Día con mayor venta:");
    console.log("vendedor:", mejor.vendedor);
    console.log("unidades vendidas:", mejor.unidadesVendidas);
    console.log("total venta: $" + mejor.totalVenta);
    
    console.log("");
    console.log("Días con más de 10 unidades vendidas:");

    let diasConMasDe10 = diasMasDe10Unidades();

    for (const venta of diasConMasDe10) {
        console.log("-------------------------");
        console.log("día:", venta.día);
        console.log("vendedor:", venta.vendedor);
        console.log("unidades vendidas:", venta.unidadesVendidas);
        console.log("total venta: $" + venta.totalVenta);
    }
}

imprimirInforme();
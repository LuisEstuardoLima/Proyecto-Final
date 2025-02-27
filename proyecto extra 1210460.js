// Variables útiles  
var precio_base = 2000;

// Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2;
var edad_50 = 0.3;

var hijos_recargo = 0.2;
var propiedad_recargo = 0.35; // 35% por propiedad
var ingreso_recargo = 0.05; // 5% sobre el salario

while (true) {
    // Mensajes de alerta para ingresar datos 
    var nombre = prompt("Ingrese su nombre, por favor (o escriba 'Salir' para terminar)");
    if (nombre.toUpperCase() === "SALIR") break;

    var edad = parseInt(prompt("¿Cuántos años tiene? Ingrese solamente números"));
    if (edad < 18) {
        alert("El asegurado debe ser mayor de edad.");
        continue;
    }

    var casado = prompt("¿Está casado actualmente? (si/no)").toUpperCase();
    var edad_conyuge = 0;
    if (casado === "SI") {
        edad_conyuge = parseInt(prompt("¿Qué edad tiene su esposo/a?"));
    }

    var hijos = prompt("¿Tiene hijos o hijas? (si/no)").toUpperCase();
    var cantidad_hijos = 0;
    if (hijos === "SI") {
        cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
    }

    var propiedades = parseInt(prompt("¿Cuántas propiedades posee? Ingrese solamente números"));
    var salario = parseFloat(prompt("Ingrese su salario mensual en números"));

    // Cálculo de recargos
    function calcularRecargo(edad) {
        if (edad >= 18 && edad <= 24) return precio_base * edad_18;
        if (edad >= 25 && edad <= 49) return precio_base * edad_25;
        if (edad >= 50) return precio_base * edad_50;
        return 0;
    }

    // Inicialización de recargo total
    var totalRecargo = 0;

    // Recargo por edad del asegurado
    totalRecargo += calcularRecargo(edad);

    // Recargo por edad del cónyuge
    if (casado === "SI" && edad_conyuge >= 18) {
        totalRecargo += calcularRecargo(edad_conyuge);
    }

    // Recargo por cantidad de hijos
    totalRecargo += cantidad_hijos * (precio_base * hijos_recargo);

    // Recargo por propiedades
    totalRecargo += propiedades * (precio_base * propiedad_recargo);

    // Recargo por ingresos
    totalRecargo += salario * ingreso_recargo;

    var precio_final = precio_base + totalRecargo;

    // Resultado
    alert("Para el asegurado " + nombre);
    alert("El recargo total será de: Q." + totalRecargo.toFixed(2));
    alert("El precio final del seguro será de: Q." + precio_final.toFixed(2));
}
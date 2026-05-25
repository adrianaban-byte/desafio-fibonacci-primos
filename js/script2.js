// Detecta cuando se hace clic en el botón
document.getElementById("btnVerificar").onclick = function() {
    calcularPrimoSeguridad();
};

// Función principal del programa
function calcularPrimoSeguridad() {
    // Captura los datos ingresados y los bloques de texto
    let numeroInput = document.getElementById("numero").value;
    let numero = parseInt(numeroInput);
    let contenedorResultado = document.getElementById("seccionResultado");
    let resultadoDiv = document.getElementById("resultado");

    // Valida que el dato sea un número válido
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingrese un número entero positivo mayor a 0.");
        return;
    }

    // Cuenta cuántos divisores exactos tiene el número
    let contadorDivisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contadorDivisores++;
        }
    }

    // Muestra si el código es seguro (2 divisores) o no
    if (contadorDivisores == 2) {
        resultadoDiv.innerHTML = "🔒 Bloque Primo Seguro: El número " + numero + " es primo. Código de acceso válido.";
        resultadoDiv.style.color = "#27ae60"; // Texto verde
        resultadoDiv.style.backgroundColor = "#12231c"; // Fondo verde oscuro
    } else {
        resultadoDiv.innerHTML = "⚠️ Código Vulnerable: El número " + numero + " no es primo. Requiere reestructuración.";
        resultadoDiv.style.color = "#c0392b"; // Texto rojo
        resultadoDiv.style.backgroundColor = "#2d1a1a"; // Fondo rojo oscuro
    }

    // Hace visible la caja de resultados en la página
    contenedorResultado.style.display = "block";
}
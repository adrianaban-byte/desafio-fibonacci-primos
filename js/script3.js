// Detecta cuando se hace clic en el botón
document.getElementById("btnProcesar").onclick = function() {
    simularEcosistema();
};

// Función principal de la simulación
function simularEcosistema() {
    // Captura los elementos del documento HTML
    let numeroInput = document.getElementById("numero").value;
    let generaciones = parseInt(numeroInput);
    let contenedorResultado = document.getElementById("seccionResultado");
    let resFibonacci = document.getElementById("resultadoFibonacci");
    let resPrimo = document.getElementById("resultadoPrimo");

    // Valida que el dato de entrada sea correcto
    if (isNaN(generaciones) || generaciones <= 0) {
        alert("Por favor, ingrese un número entero positivo mayor a 0.");
        return;
    }

    // -----------------------------------------------------------
    // PARTE 1: Proyección de Crecimiento (Sucesión de Fibonacci)
    // -----------------------------------------------------------
    let a = 0;
    let b = 1;
    let poblacionFinal = 0;
    let tablaHTML = "<h3>Proyección de la Población (Fibonacci):</h3>";

    // Ciclo iterativo usando variables simples
    for (let j = 1; j <= generaciones; j++) {
        poblacionFinal = b;
        tablaHTML += "<div class='mes-item'>Generación " + j + ": " + poblacionFinal + " individuos</div>";
        
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
    
    resFibonacci.innerHTML = tablaHTML;

    // -----------------------------------------------------------
    // PARTE 2: Verificar Estado Evolutivo (Números Primos)
    // -----------------------------------------------------------
    let contadorDivisores = 0;
    for (let i = 1; i <= poblacionFinal; i++) {
        if (poblacionFinal % i == 0) {
            contadorDivisores++;
        }
    }

    // Muestra en pantalla si la población final mutó o no
    if (contadorDivisores == 2) {
        resPrimo.innerHTML = "✨ <b>Estado Evolutivo:</b> La población final (" + poblacionFinal + ") es un número PRIMO. ¡La colonia ha MUTADO con éxito para sobrevivir!";
        resPrimo.style.color = "#27ae60"; 
        resPrimo.style.backgroundColor = "#12231c"; 
    } else {
        resPrimo.innerHTML = "🐛 <b>Estado Evolutivo:</b> La población final (" + poblacionFinal + ") NO es un número primo. La colonia se mantiene en estado ESTÁNDAR sin mutaciones.";
        resPrimo.style.color = "#e67e22"; 
        resPrimo.style.backgroundColor = "#2d1f14"; 
    }

    // Hace visible el bloque de resultados en la pantalla
    contenedorResultado.style.display = "block";
}
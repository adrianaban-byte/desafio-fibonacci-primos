
document.getElementById("btnCalcular").onclick = function() {
    calcularAhorroFibonacci();
};

function calcularAhorroFibonacci() {
    
    let inputMeses = document.getElementById("meses").value;
    let cantidadMeses = parseInt(inputMeses);

    
    let contenedorResultado = document.getElementById("seccionResultado");
    let resultadoAcumulado = document.getElementById("resultadoAcumulado");
    let resultadoDetalle = document.getElementById("resultadoDetalle");

    
    if (isNaN(cantidadMeses) || cantidadMeses <= 0) {
        alert("Por favor, ingrese un número de meses válido mayor a 0.");
        return;
    }

    
    let a = 0; 
    let b = 1; 
    let totalAhorrado = 0;
    
    let detalleHTML = "<h3>Desglose mes a mes:</h3>";

    for (let i = 1; i <= cantidadMeses; i++) {
        let ahorroDelMes = b;
        totalAhorrado += ahorroDelMes;

        
        detalleHTML += "<div class='mes-item'><strong>Mes " + i + ":</strong> Bs. " + ahorroDelMes + "</div>";

       
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }

    
    resultadoAcumulado.innerHTML = "<p style='font-size: 18px;'><strong>Total Final Ahorrado:</strong> Bs. " + totalAhorrado + "</p>";
    resultadoDetalle.innerHTML = detalleHTML;

    
    contenedorResultado.style.display = "block";
}
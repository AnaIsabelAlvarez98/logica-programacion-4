function calcularFibonacci() {
    const inputElement = document.getElementById('numero');
    const resultadoElement = document.getElementById('resultado');
    const inputValue = inputElement.value.trim();

    if (isNaN(inputValue) || parseInt(inputValue) <= 0) {
        resultadoElement.textContent = "Por favor ingrese un número válido y mayor que cero";
        return;
    }

    const limit = parseInt(inputValue);

    function fibonacci(limit) {
        let array = [];
        let a = 0, b = 1;
        
        if (limit === 1) {
            array.push(a);
            return array;
        }
        
        array.push(a);
        if (limit > 1) {
            array.push(b);
        }

        for (let i = 2; i < limit; i++) {
            let c = a + b;
            array.push(c);
            a = b;
            b = c;
        }

        return array;
    }

    const fibonacciSeries = fibonacci(limit);
    resultadoElement.textContent = `Serie de Fibonacci para ${limit}: ${fibonacciSeries.join(", ")}`;
}

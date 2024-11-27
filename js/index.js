let number = parseInt(prompt("Ingresa un numero"));


console.log("WE ARE CONNECTED");

function fibonacciSecuence(n) {
    if (n < 0) {
      return [];
    }
  
    const secuencia = [0, 1];
    let i = 2;
    while (secuencia[i - 1] + secuencia[i - 2] <= n) {
      secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
      i++;
    }
  
    let secuenciaStringMessage = "Secuencia de numeros: " + secuencia.join(", ");
    return secuenciaStringMessage;
  }

  alert(`${fibonacciSecuence(number)}`)
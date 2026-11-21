
      //+,-,*,/,%, **
      //Suma, Resta, Multiplicacion, Division, Modulo, Potencia
      // 

      
      num1 = prompt ("Ingresa un numero del 1 al 10"); //Funcion(Argumentos)
      num2 = prompt ("Ingresa otro numero del 1 al 10");

      num1 = Number (num1);
      num2 = Number (num2);
      // > < >= <= == != 

      alert (`El resultado de ${num1} + ${num2} es: ${num1 + num2}`);
      alert (`El resultado de ${num1} - ${num2} es: ${num1 - num2}`);
      alert (`El resultado de ${num1} * ${num2} es: ${num1 * num2}`);
      alert (`El resultado de ${num1} / ${num2} es: ${num1 / num2}`);
      alert (`El resultado de ${num1} % ${num2} es: ${num1 % num2}`);
      alert (`El resultado de ${num1} ** ${num2} es: ${num1 ** num2}`);

      document.getElementById("suma").innerText = `El resultado de ${num1} + ${num2} es: ${num1 + num2}`;
      document.getElementById("resta").innerText = `El resultado de ${num1} - ${num2} es: ${num1 - num2}`;
      document.getElementById("multiplicacion").innerText = `El resultado de ${num1} * ${num2} es: ${num1 * num2}`;
      document.getElementById("division").innerText = `El resultado de ${num1} / ${num2} es: ${num1 / num2}`;
      document.getElementById("modulo").innerText = `El resultado de ${num1} % ${num2} es: ${num1 % num2}`;
      document.getElementById("potencia").innerText = `El resultado de ${num1} ** ${num2} es: ${num1 ** num2}`;
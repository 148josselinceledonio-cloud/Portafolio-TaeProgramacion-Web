      num1 = prompt ("Ingresa un numero del 1 al 10"); //Funcion(Argumentos)
      num2 = prompt ("Ingresa otro numero del 1 al 10");

      num1 = Number (num1);
      num2 = Number (num2);
      // > < >= <= == != 

      alert (`El resultado de ${num1} > ${num2} es: ${num1 > num2}`);
      alert (`El resultado de ${num1} < ${num2} es: ${num1 < num2}`);
      alert (`El resultado de ${num1} >= ${num2} es: ${num1 >= num2}`);
      alert (`El resultado de ${num1} <= ${num2} es: ${num1 <= num2}`);
      alert (`El resultado de ${num1} == ${num2} es: ${num1 == num2}`);
      alert (`El resultado de ${num1} != ${num2} es: ${num1 != num2}`);

      document.getElementById("mayor-que").innerText = `El resultado de ${num1} > ${num2} es: ${num1 > num2}`;
      document.getElementById("menor-que").innerText = `El resultado de ${num1} < ${num2} es: ${num1 < num2}`;
      document.getElementById("mayor-igual").innerText = `El resultado de ${num1} >= ${num2} es: ${num1 >= num2}`;
      document.getElementById("menor-igual").innerText = `El resultado de ${num1} <= ${num2} es: ${num1 <= num2}`;
      document.getElementById("igual").innerText = `El resultado de ${num1} == ${num2} es: ${num1 == num2}`;
      document.getElementById("diferente").innerText = `El resultado de ${num1} != ${num2} es: ${num1 != num2}`;


      
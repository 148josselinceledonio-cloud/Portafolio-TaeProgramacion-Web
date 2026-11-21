alert ("Veremos si un numero es par o impar");
numero = prompt ("Dime un numero");
numero = Number (numero);


if (numero % 2 == 0) {
    document.write("<h1>El numero es par</h1>");
}
else {
    document.write("<h1>El numero es impar</h1>");
}

nombre = prompt("¿Cual es tu nombre?");
edad = prompt("Cual es tu edad?");
edad = Number(edad);

// Selectiva simple
//Si algo pasa entonces. . .
if (edad >= 17) { //Ejecutar si es verdadero
    alert("Pasele causa!");
}
//Si no pasa entonces que se hace. . . 
else{
    alert("Andese a la cuna morro");
}
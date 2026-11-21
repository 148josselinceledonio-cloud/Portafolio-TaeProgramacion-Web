let nacionalidad = prompt("¿Cuál es tu nacionalidad? (mexicano / gringo)").toLowerCase();
let edad = Number(prompt("¿Cuántos años tienes?"));

if (nacionalidad.includes("mex")) {
  if (edad < 18) {
    alert("Andese a ver YouTube kids");
  } else {
    alert("Pásele joven");
  }
} else if (nacionalidad.includes("gring") || nacionalidad.includes("usa") || nacionalidad.includes("eeuu") || nacionalidad.includes("unid") || nacionalidad.includes("america")) {
  if (edad < 21) {
    alert("shusma a la house kid");
  } else {
    alert("pase chaval");
  }
} else {
  alert("Escribe mexicano o gringo, por favor");
}
/**
 * BOLEANOS
 */
/**
 * let es igual a var,
 * su declaracion let nombreVariable:[TipoDeDato] = [ValorAsignado]
 */
/**
 * RECOMENDACIONES
 */
/**
 * no recomendable porque type escrit es inteleginte al momento de interpretar la variable
 */
var superman = true;
var esBatman;
var esAcuaman = true;
if (superman) {
    console.log("Salvado");
}
else {
    console.log("ohh no");
}
superman = convertirSuperHeroe();
if (superman) {
    console.log("Salvado");
}
else {
    console.log("ohh no");
}
function convertirSuperHeroe() {
    return false;
}
/**
 * NUMERICOS
 */
var vengador = 5;
var villanos = 7;
var otros = 2;
if (vengador > villanos) {
    console.log('Estamos Salvados');
}
else {
    console.log('ohh noo');
}
/**
* string
*/
var Batman = "Batman";
var linterVerde = "Linterna Verde";
var volcanNegro = "Volcan Negro";
console.log(Batman);
console.log(linterVerde);
console.log(volcanNegro);
var conCat = "Los heroes son: " + Batman + ", " + linterVerde + ", " + volcanNegro;
console.log(conCat);
/**
* ANY
*/
var anyVengador;
var anyExiste;
var anyDerrotas;
anyVengador = "DR. Strange";
console.log(anyVengador.charAt(0));
anyVengador = 150.5555;
console.log(anyVengador.toFixed(2));
anyVengador = true;
console.log(anyVengador);
console.log(anyVengador);
console.log(anyDerrotas);
console.log(anyExiste);
/**
* Arrays
*/
var arreglo = [1, 2, 3, 4, 5, 6, 7];
var avillanos = ["Jose", "Ramon", "simo", "guerra"];
console.log(avillanos[0].charAt(0));

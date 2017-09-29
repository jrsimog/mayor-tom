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

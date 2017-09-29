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
let superman:boolean = true;
let esBatman:boolean;
let esAcuaman = true; 


if(superman){
console.log("Salvado");
}else{
    console.log("ohh no");    
}

superman = convertirSuperHeroe();


if(superman){
    console.log("Salvado");
    }else{
        console.log("ohh no");    
    }
function convertirSuperHeroe(){
    return false;
}

/**
 * NUMERICOS
 */
 
 let vengador:number = 5;
 let villanos:number = 7;
 let otros = 2;

 if (vengador > villanos){
    console.log('Estamos Salvados');
 }else{
    console.log('ohh noo');
    
 }
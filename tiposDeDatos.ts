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
 /**
 * string
 */

 let Batman:string = "Batman";
 let linterVerde:string = "Linterna Verde";
 let volcanNegro:string = "Volcan Negro";

 console.log(Batman);
 console.log(linterVerde);
 console.log(volcanNegro);

 let conCat:string = `Los heroes son: ${Batman}, ${linterVerde}, ${volcanNegro}`;

 console.log(conCat);


 /**
 * ANY
 */

let anyVengador;
let anyExiste;
let anyDerrotas;


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

 let arreglo:number[] = [1,2,3,4,5,6,7];
 let avillanos:string[] = ["Jose","Ramon","simo","guerra"];

 console.log
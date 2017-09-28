class Avenger {
    nombre:string;
    arma:string;

    constructor(nombre:string, arma:string){
        this.nombre = nombre;
        this.arma = arma;
    }
}

let thor = new Avenger("Thor", "Mjolnir")
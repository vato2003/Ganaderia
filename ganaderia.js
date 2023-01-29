class Ganaderia {
    constructor (Alimento,Estado,peso){
        this._Alimento=Alimento;
        this._Estado = Estado;
        this._Peso = peso;
    }



}

const vobina = new Ganaderia('pasto','Bien',350);

console.log(vobina._Alimento);
console.log(vobina._Estado);
console.log(vobina._Peso);

console.log();
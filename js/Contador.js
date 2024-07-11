export default class Contador{
    constructor() {
        this.mujeres = 0;
        this.hombres = 0;
    }

    contar(Persona){
        if (Persona.sexo == "F") ++this.mujeres;
        else ++this.hombres;
    }

    personas(){
        return this.mujeres + this.hombres;
    }

    get mujeres() {
        return this._mujeres;
    }
    get hombres() {
        return this._hombres;
    }

    set mujeres(mujeres) {
        this._mujeres = mujeres;
    }
    set hombres(hombres) {
        this._hombres = hombres;
    }
}
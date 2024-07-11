export default class Persona{
    constructor(nom,sex) {
        this.nombre = nom;
        this.sexo = sex;
    }

    get nombre() {
        return this._nombre;
    }
    get sexo() {
        return this._sexo;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }

}
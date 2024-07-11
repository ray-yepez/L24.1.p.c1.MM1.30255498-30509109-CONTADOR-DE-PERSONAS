import Persona from "./Persona.js";
import Contador from "./Contador.js";

let cont = new Contador();

//Luis, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo;

let luis = new Persona("Luis", "M");
let jose1 = new Persona("José", "M");
let carmen = new Persona("Carmen", "F");
let rosa = new Persona("Rosa", "F");
let jose2 = new Persona("José", "M");
let maria = new Persona("Maria", "F");
let luz = new Persona("Luz", "F");
let rafael = new Persona("Rafael", "M");
let liz = new Persona("Liz", "F");
let marcos = new Persona("Marcos", "M");
let leo = new Persona("Leo", "M");
let ana = new Persona("Ana", "F");

cont.contar(luis);
cont.contar(jose1);
cont.contar(carmen);
cont.contar(rosa);
cont.contar(jose2);
cont.contar(maria);
cont.contar(luz);
cont.contar(rafael);
cont.contar(liz);
cont.contar(marcos);
cont.contar(leo);
cont.contar(ana);

let salida = document.getElementById("salida");

salida.innerHTML =  "Cantidad de personas " + cont.personas();
salida.innerHTML += "<br>Cantidad de hombres " + cont.hombres;
salida.innerHTML += "<br>Cantidad de mujeres " + cont.mujeres;
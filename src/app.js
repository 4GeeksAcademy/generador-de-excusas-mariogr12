import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let quien = ["Mi perro ", "Mi abuela ", "El del correo ", "Mi pájaro "];
  let accion = ["se comió ", "se ha hecho pis en ", "ha aplastado ", "ha roto "];
  let que = ["mis deberes ", "mi móvil ", "mi coche "];
  let cuando = ["antes de clase", "cuando estaba durmiendo", "mientras que hacía ejercicio", "mientras que estaba comiendo", "cuando estaba rezando"];

  let frase = quien[Math.floor(Math.random()*quien.length)] + accion[Math.floor(Math.random()*accion.length)] + que[Math.floor(Math.random()*que.length)] + cuando[Math.floor(Math.random()*cuando.length)];

document.querySelector(".segundoMensaje").innerHTML = "<p><strong>"+ frase +"</strong></p>";
  //write your code here
};

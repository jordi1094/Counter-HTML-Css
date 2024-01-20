let count = 0

let botonResta = document.getElementById("less")
let botonSuma = document.getElementById("plus")
let botonReset = document.getElementById("reset")
let contador = document.getElementById("display")

botonResta.onclick = function Restar(){
    count --
    contador.innerHTML = count
};

botonSuma.onclick = function  Sumar(){
    count++
    contador.innerHTML = count
};
botonReset.onclick =  function Resetear() {
    count = 0
    contador.innerHTML = count
};


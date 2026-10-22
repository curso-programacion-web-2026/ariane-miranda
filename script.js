<script src="script.js"></script>
const boton = document.getElementById("botonCambiar");
const titulo = document.getElementById("titulo");
let contador = 0;
boton.addEventListener("click", function () {
contador++;
if (contador === 1) {
titulo.textContent = "¡Bienvenidos!";
} else if (contador === 2) {
titulo.textContent = "¡Espero que disfruten mi página!";
} else if (contador === 3) {
titulo.textContent = "¡Gracias por visitarla!";
}
});


const texto = document.getElementById("texto");
const disminuir = document.getElementById("disminuir");
const normal = document.getElementById("normal");
const aumentar = document.getElementById("aumentar");
let tamaño = 16;
aumentar.addEventListener("click", function () {
if (tamaño < 30) {
tamaño = tamaño + 2;
texto.style.fontSize = tamaño + "px";
}
});
disminuir.addEventListener("click", function () {
if (tamaño > 10) {
tamaño = tamaño - 2;
texto.style.fontSize = tamaño + "px";
}
});
normal.addEventListener("click", function () {
tamaño = 16;
texto.style.fontSize = tamaño + "px";
});

const boton = document.getElementById("volverArriba");
window.addEventListener("scroll", function () {
if (window.scrollY > 300) {
boton.style.display = "block";
} else {
boton.style.display = "none";
}
});
boton.addEventListener("click", function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});

addEventListener().

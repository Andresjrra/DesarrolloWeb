let zona = document.getElementById('zona');
let mensaje = document.getElementById('mensaje');
let ordenCorrecto = ["A", "E", "I", "O", "U"];
let elementosColocados = [];

// Evento al iniciar el arrastre
document.querySelectorAll('.elemento').forEach(el => {
    el.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
    });
});

// Permitir soltar en la zona
zona.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// Manejo de soltar elementos en orden correcto
zona.addEventListener('drop', (e) => {
    e.preventDefault();
    let id = e.dataTransfer.getData('text');
    let elemento = document.getElementById(id);

    // Verifica si es una vocal y si es la siguiente en el orden correcto
    if (ordenCorrecto[elementosColocados.length] === id) {
        elemento.classList.add('correcto');
        zona.appendChild(elemento);
        elementosColocados.push(id);

        // Validar si todas las vocales están colocadas en orden
        if (elementosColocados.length === 5) {
        mensaje.textContent = "¡Has colocado todas las vocales en el orden correcto!";
        }
    } else {
        mensaje.textContent = "Debes colocar las vocales en orden.";
    }
});

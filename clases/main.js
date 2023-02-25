let id = 0

class Persona {
    constructor(id, nombre, edad, genero) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    Saludar() {
        alert(`¡Hola, me llamo ${this.nombre}!`);
    }
}

const CrearPersona = () => {
    let docNombre = document.getElementById('input-nombre').value;
    let docEdad = document.getElementById('input-edad').value;
    let docGenero = document.getElementById('input-genero').value;

    const Persona1 = new Persona(id, docNombre, docEdad, docGenero);
    console.log(Persona1);

    id += 1;
}
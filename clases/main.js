var contenedorCards = document.getElementById("cards");

class MoldePersona {
    constructor(id, nombre, edad, genero) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    CrearCardPersona() {
        return contenedorCards.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.id}</h5>
                <h5 class="card-title">${this.nombre}</h5>
                <h5 class="card-title">${this.edad}</h5>
                <h5 class="card-title">${this.genero}</h5>
            </div>
        </div>
        `
    }
}

const personaejemplo = new MoldePersona(0, "pepe", 21, "m");
console.log(personaejemplo);

personaejemplo.CrearCardPersona();

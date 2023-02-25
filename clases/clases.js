class Dog {
    constructor(name, race) {
        this.name = name;
        this.race = race;
    }

    ladrar() {
        console.log(this.name + ': Guau Guau!');
    }
}

const max = new Dog('Max', 'Pitbull');
const pechiquiroga = new Dog('Stich', 'Caniche');

// max.ladrar();
// pechiquiroga.ladrar();

class Gorda {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.felicidad = 0;
    }

    meDuele() {
        console.log('me duele la rodilla :(');
    }

    comer() {
        console.log('felicidad incrementó en 1.');
        this.felicidad += 1;
        console.log('Felicidad: ' + this.felicidad);
    }
}

const melanie = new Gorda()

melanie.meDuele()
melanie.comer()
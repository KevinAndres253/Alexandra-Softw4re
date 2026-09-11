class Animal {
    nombre
    raza
    especie
    edad
    constructor(nombre,raza,especie,edad){
        this.nombre = nombre
        this.raza = raza
        this.especie = especie
        this.edad = edad
    }
    registarNombre(nuevonombre){
        this.nombre = nuevonombre
    }
    registarRaza(nuevaraza){
        this.raza = nuevaraza
    }
    registarEspecie(nuevespecie){
        this.especie = nuevespecie
    }
    registarEdad(nuevaedad){
        this.edad = nuevaedad
    }
    mostrarDatos(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Raza: ${this.raza}`)
        console.log(`Especie: ${this.especie}`)
        console.log(`Edad: ${this.edad}`)
    }
}

class Propietario {
    nombrePropietario
    Direccion
    telefono
    constructor(nombrePropietario,Direccion,telefono){
        this.nombrePropietario = nombrePropietario
        this.Direccion = Direccion
        this.telefono = telefono
        this.mascotas=[]
    }

    registrarNombrePropietario(nuevonombrePropietario){
        this.nombrePropietario = nuevonombrePropietario
    }
    registrarDireccion(nuevadireccion){
        this.Direccion = nuevadireccion
    }
    registrarTelefono(nuevotelefono){
        this.telefono = nuevotelefono
    }
    registrarMascota(nuevamascota){
        this.mascotas.push(nuevamascota)
    }
}

let colmillo = new Animal("Colmillo","Labrador","Perro",5)
let Alexa = new Propietario("Alexa","Calle 123","555-1234")
Alexa.registrarMascota(colmillo)
console.log(Alexa.mascotas)
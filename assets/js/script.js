
const inputComentarios = document.querySelector("#inputComentarios")
const animalSeleccion = document.querySelector("#animal")
const edadSeleccion = document.querySelector("#edad")
const comentarios = document.querySelector("#comentarios")
const btnRegistrar = document.querySelector("#btnRegistrar")
const modal = document.querySelector("#exampleModal")
const modalAnimal = document.querySelector("#modalAnimal")
const modalEdad = document.querySelector("#modalEdad")
const modalComentarios = document.querySelector("#modalComentarios")
const spanCerrar = document.querySelector(".close")
const animalesContainer = document.querySelector("#animalesContainer")

let animalTodos = []; 

( async () => {
    try{
   const response = await fetch("animales.json")

   if(response.ok === false){
    console.log("No se encuentran animales")

    throw {
        codigo:404,
        mensaje: "No existen animales"
    }
   }
   console.log("si encontró el animal")
   const data = await response.json()   
   animalTodos = data
   console.log(data.name)
   console.log(data.imagen)
} catch (error){
    //Capturando
    console.log(error)
}
})();



// function mostrarModal(){
//     modal.style.display = "block";
// }

// spanCerrar.onclick = function(){
//     modal.style.display = "none"
// }


btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("me estas procesando")
    console.log(animalSeleccion.value)
    console.log(edadSeleccion.value)
    console.log(comentarios.value)



    const animalEncontrado = animalTodos.find((item) => item.name.toLowerCase() === animalSeleccion.value.toLowerCase())
 
    switch(animalSeleccion.value){ //SWITCH NO GENERA SCOPE
    case "Leon": 
        
        const leon = new Leon(animalEncontrado.name, animalEncontrado.edad, animalEncontrado.comentarios)
        leon.pintarHTML(animalesContainer)
        break;

    // case "charizard":
    //     const charizard = new Pikachu(pokeEncontrado.name, pokeEncontrado.img)
    //     charizard.pintarHTML(pokeLista)
    //     break;

    // case "ditto":
    //     const ditto = new Pikachu(pokeEncontrado.name, pokeEncontrado.img)
    //     ditto.pintarHTML(pokeLista)
    //     break
}

});

    modalAnimal.textContent = "animal:" + animalSeleccion.value;
    modalEdad.textContent = "Edad:" + edadSeleccion.value;
    modalComentarios.textContent = "Comentarios:" + comentarios.value; 

mostrarModal()

    


//switch()





//evento 





class Animal {
    #nombre
    #edad
    #img
    #comentarios
    #sonido

    constructor(nombre, edad, img, comentarios, sonido){
        this.#nombre = nombre
        this.#edad = edad
        this.#img = img
        this.#comentarios = comentarios
        this.#sonido = sonido
    }

    get nombre(){
        return this.#nombre
    }

    get edad(){
        return this.#edad 
    }

    get img(){
        return this.#img
    }

    set comentarios(nuevoComentario){
        this.#comentarios = nuevoComentario
    }

    get sonido(){
        return this.#sonido
    }

    pintarHTML(){
        console.log("Estoy pintando el animal")
    }



}

class Leon extends Animal {

    pintarHTML(elemento){
    animalesContainer.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="assets/imgs/Leon.png" class="card-img-top" alt="Leon">
    <div class="card-body">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
    }


    sonido(rugir){
        return "El León está rugiendo"
    }


}

class Lobo extends Animal {

    sonido(aullar){
        return "El lobo está aullando"
    }
}

class Oso extends Animal{
    
   sonido(grunir){
        return "El oso gruñe"
    }
    
}

class Serpiente extends Animal {
    
    sonido(sisear){
        return "La serpiente sisea"
    }
}

class Aguila extends Animal {

    sonido(chillar){
        return "La Aguila chilla"
    }
}


//instancias

const leon = new Leon("Leon", "edad", "img", "comentarios", "sonido" )

const lobo = new Lobo("Lobo", "edad", "img", "comentarios")
const oso = new Oso("Oso", "edad", "img", "comentarios", "sonido")

const serpiente = new Serpiente("Serpiente", "edad", "img", "comentarios")

const aguila = new Aguila("Aguila", "edad", "img", "sonido")

console.log(animal.nombre);
console.log(leon.sonido());
console.log(oso.edad);
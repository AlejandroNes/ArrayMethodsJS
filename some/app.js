//arreglo de strings
const lenguajes = ["Java", "PHP", "JavaScript", "Python", "C", "Go"];

//arreglo de objetos
const usuarios = [
    {id:1, nombre:"Alex",correo: "alex@gmail.com",sueldo: 3000 },
    {id:2, nombre:"Maria",correo: "maria@gmail.com", sueldo: 3000 },
    {id:3, nombre:"Cristian",correo: "cristian@gmail.com",sueldo: 3000 },
    {id:4, nombre:"Jorge",correo: "jorge@gmail.com",sueldo: 3000 },
    {id:5, nombre:"Daniela",correo: "daniela@gmail.com",sueldo: 3000 },
]

//sin array methods
function verificarDato(dato){
    let verificar = false;

    //for
    for( let i=0 ; i<usuarios.length ; i++ ){
        if(usuarios[i].nombre === dato){
            verificar = true
        }
    }
    return verificar
}

const respuesta1 = verificarDato("Alejandro"); //retorna FALSE
const respuesta2 = verificarDato("Daniela"); //retorna TRUE


//con el array method some();
const verificar1 = usuarios.some(item =>item.nombre === "Alejandro")//retorna FALSE
const verificar2= usuarios.some(item =>item.nombre === "Daniela")//retorna TRUE

var perritos = {
    {
    raza: "Poodle",
    edad: 5,
    tamano: "Mediano",
    nombre: "Pantruca",
    imagen: "https://www.facebook.com/pancho/fotos/pantu.jpg"
    },
    {
    raza: "Caniche",
    edad: 5,
    tamano: "Toy",
    nombre: "Lula"
    }
}

for (var i = 0; i <perritos.length; i++){

    console.log(perritos[i].nombre +"Raza:" + perritos[i].raza)
    if ( perritoa[i].imagen != undefined){
        console.log("Imagen: " + perritos[i].imagen); 
    }
}

var dog =
    {
    raza: "Poodle",
        edad: 5,
        tamano: "Mediano",
        nombre: "Pantruca",
        imagen: "https://www.facebook.com/pancho/fotos/pantu.jpg",
        ladrar: function(){
            console.log("Guau!");
        },
        hacerPopo: function (){
            console.error ("Guacala!... mi alfombra");
        },
        dituNombre: function(){
            console.info("Guau, me llamo" + this.getName());
        },
        getName: function(){
            return this.nombre;
        },
        setName: function(newName){
            this.nombre = newName
        }
        
    }

dog.ladrar();
dog.hacerPopo();
dog.dituNombre();
dog.setName("Cachupin!");



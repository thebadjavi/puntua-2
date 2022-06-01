let fotos = ["casa1", "casa2", "casa3", "casa4", "casa5", "casa6", "casa7", "casa8"];
let galeria = [];

for (let i = 0; i < fotos.length; i++) {
    let siguienteFoto = fotos[i];

    let imagen = document.createElement("img");
    imagen.src = `/img/${siguienteFoto}.jpg`;

    imagen.addEventListener("dblclick", function (event) {
   
        
        let fotoClicada = event.target.src;

        if (galeria.includes(fotoClicada)) {

            alert(`La foto ${fotoClicada} ya está en la galería.`);
            return;
        }

        galeria.push(fotoClicada);
        llenarGaleria();

    })


    let sectionFototeca = document.querySelector("#fototeca");
    sectionFototeca.appendChild(imagen);
}

function llenarGaleria() {


    let sectionGaleria = document.querySelector("#galeria");
    sectionGaleria.innerHTML = "";



    for (let i = 0; i < galeria.length; i++) {

        

        let contenedorImagen = document.createElement("div");
        contenedorImagen.classList.add("imagen-galeria");

        let imagen = document.createElement("img");
        imagen.src = galeria[i];

        let aspaQuitarFoto = document.createElement("img");
        aspaQuitarFoto.src = "/img/borrar.png";
        aspaQuitarFoto.classList.add("aspa-eliminar");
        aspaQuitarFoto.id = imagen.src;

        aspaQuitarFoto.addEventListener("click", function (event) {

            

            let srcFoto = event.target.id;


            let posImagenGaleria = galeria.indexOf(srcFoto);


            galeria.splice(posImagenGaleria, 1);



            llenarGaleria();
        })


        contenedorImagen.appendChild(imagen);

        contenedorImagen.appendChild(aspaQuitarFoto);


        sectionGaleria.appendChild(contenedorImagen);

    }



}

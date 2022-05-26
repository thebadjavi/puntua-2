let foto  = [
    "casa1",
    "casa2",
    "casa3",
    "casa4",
    "casa5",
    "casa6",
    "casa7",
    "casa8"
  ];
  var galeria = [];

var img_path = 'img/'
var position = 0;

var cantidad = foto.length;

 
console.log(cantidad)
let container = document.getElementById ("fototeca");
 


foto.forEach(function(foto) {
     position++
     let casas =  "<img src='" + img_path + `${foto}` + ".jpg')>";
    cadena=prueba=container.innerHTML;
     
    galeria=container.innerHTML =cadena+casas;


     console.log("numero de urlImagen "+casas)  

});


 



/* 
let urlNext = "url('" + img_path + foto[0] + ".jpg')";
console.log("pruebas "+urlNext)  
*/
 
//zona de pruebas
/* 
let text = "";
let i = 0;
for (let i = 0; i < cantidad; i++) {
  console.log(`Numero: ${i}`);
  let urlNext = "url('" + img_path + foto[position] + ".jpg')";
   container.style.backgroundImage = urlNext;
  position++

  

}

 while (i < cantidad) {
  console.log("The number is " + i)  
  console.log("la cantidad "+cantidad)  

  let urlImagen =  "url('" + img_path + `${[1]}` + ".jpg')";
  console.log("la url es "+urlImagen)  

  container.style.backgroundImage = urlImagen;

   i++;
}
*/
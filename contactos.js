let contactosPre = ["JOSE MARTINEZ","JUAN MARIN","DAVID CARDENAS","DANIELA MARIN","ROBINSON RAMIREZ","JUAN CARLOS COLINA"];

function newContacto(contac){
    contactosPre.push(contac.toUpperCase());
}


function borrarContac(contac){
    let contador = 0;
    let nombre = contac.toUpperCase();

    while(contador < contactosPre.length){

        if(contactosPre[contador]==nombre){

            let contador2 = contador;
            while(contador2 < contactosPre.length){                  

                    contactosPre[contador2] = contactosPre[contador2+1] ;
                    contador2++;
            }
        }        
        contador++;
    }
    contactosPre.pop();

}

function imprimirContactos(){
    let  mensajeImp="Los contactos existentes al momento son: \n ";
    let  contador = 0;

    while(contador < contactosPre.length){
        mensajeImp = mensajeImp + contactosPre[contador] +" \n " ;
        contador++;
    }

    console.log(mensajeImp);
    
}


// Aqui mostramos el arreglo predeterminado antes de agregar un nuevo contacto, y agregamos el contacto JULIAN ORTEGA
console.log(contactosPre);
let nombre = "JULIAN ORTEGA";
newContacto(nombre);

// Aqui mostramos el arreglo predeterminado con el nuevo contacto JULIAN y mandamos a borrar el nombre DAVID CARDENAS 
console.log(contactosPre);
nombre = "JUAN MARIN";
borrarContac(nombre);



console.log(contactosPre);

imprimirContactos();
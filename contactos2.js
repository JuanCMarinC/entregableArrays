

let contactos2 = [
    {
        ide: 1,
        nombres: "JUAN CAMILO",
        apellidos: "MARIN CEBALLOS",
        telefono: "3154843526",
        ubicaciones: ["CALI","CALLE 60 #24-65"]
    },
    {
        ide: 2,
        nombres: "JUAN ESTEBAN",
        apellidos: "MARIN CABRERA",
        telefono: "3154843526",
        ubicaciones: ["CALI","CALLE 60 #24-65"]
    },
    {
        ide: 3,
        nombres: "LAURA SOFIA",
        apellidos: "MARIN CABRERA",
        telefono: "3154843526",
        ubicaciones: ["CALI","CALLE 60 #24-65"]
    },
];

console.log(contactos2);


function imprimirContactos(){
    let contador1 = 0;
    let mensaje = "";

    while (contador1 < contactos2.length){
        mensaje = `${mensaje}Codigo =   ${contactos2[contador1].ide} Nombre =   ${contactos2[contador1].nombres} Apellidos =  ${contactos2[contador1].apellidos}telefono =  ${contactos2[contador1].telefono}ciudad =  ${contactos2[contador1].ubicaciones[0]}barrio =  ${contactos2[contador1].ubicaciones[1]}\n`;

        contador1++;
    }

    alert("CONTACTOS ACTUALIZADOS : \n" + mensaje);
}


function agregarCont(contacto2){
    contactos2.push(contacto2) ;   

}

function newContacto(){

    let contacto = {
    ide: parseInt((contactos2.length + 1)),
    nombres: prompt("Por favor digite el nombre del nuevo contacto: "),
    apellidos: prompt("Por favor digite el apellido del nuevo contacto: "),
    telefono: prompt("Por favor digite el telefono del nuevo contacto: "),
    ubicaciones: [prompt("Por favor digite la ciudad del nuevo contacto: "),prompt("Por favor digite la direccion del nuevo contacto: ")]
    };
   
    agregarCont(contacto);
    

    imprimirContactos();
    
 
}



function deleteContacto(){
    let contador4 = 0 ;
    let idPet= parseInt(prompt("Por favor digite el ID del contacto a eliminar"));
    contactos2 = contactos2.filter(item => item.ide != idPet);   
    imprimirContactos();
}





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
    let idPet= parseInt(prompt("Por favor digite el ID del contacto a eliminar"));
    contactos2 = contactos2.filter(item => item.ide != idPet);   
    imprimirContactos();
}

function updateContacto(){
    var idPet= parseInt(prompt("Por favor digite el ID del contacto a editar"));
    var contactoTemp = contactos2.find((element) => element.ide == idPet);
    var cadena = prompt("Por favor modifique la informacion dejando los / como separador de cada campo: ",
                        contactoTemp.ide +"/"+ contactoTemp.nombres +"/"+ contactoTemp.apellidos +"/"+
                        contactoTemp.telefono +"/"+ contactoTemp.ubicaciones[0] +"/"+ 
                        contactoTemp.ubicaciones[1]);
    var arrTemp= cadena.split("/");

    let contTemp = {
        ide: arrTemp[0],
        nombres: arrTemp[1],
        apellidos: arrTemp[2],
        telefono: arrTemp[3],
        ubicaciones: [arrTemp[4],arrTemp[5]]
    }   
    
    contactos2[arrTemp[0]-1] = contTemp;

    imprimirContactos();
}



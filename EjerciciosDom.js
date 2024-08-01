window.addEventListener('load',function(){
    console.log("las weas");
    var formulario=document.querySelector("#formulario");
    var box_dashed=document.querySelector(".dashed");
    box_dashed.style.display="none";
    formulario.addEventListener('submit', function(){
        box_dashed.style.display="block";
        /*console.log("evento submit capturado");*/
        var nombre =document.querySelector("#nombre").value;
        var apellido= document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        /*console.log(nombre,apellido,edad);*/
        var datos_usuario=[nombre, apellido, edad];
        for(let indice=0; indice in datos_usuario;indice++){
            var parafo=document.createElement("p");
            parafo.append(datos_usuario[indice]);
            box_dashed.append(parafo);

        }
    })
})
function Verificar(){
    let user =document.getElementById("User").value;
    let password = document.getElementById("Password").value;
    let posicion;

    if (user=="" || password=="" || user=="" && password==""){
        alert("Datos ingresado incorrectamente");
        
    }
    else{
        alert("Datos ingresados correctamente");
        document.Validado.submit();
    }

}
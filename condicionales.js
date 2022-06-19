function condicionales(a) {
    if(a===1){
        document.getElementById("titulo").innerHTML = "Puedes Votar";
        let edad;
        edad = prompt("Digite una edad: ");
        if ((edad >= 18)&&(edad<=110)) {
            document.getElementById("contenido").innerHTML = "Si puedes votar.";
        }else{
            document.getElementById("contenido").innerHTML = "No puedes votar.";
        }
    }
    if(a===2){
        document.getElementById("titulo").innerHTML = "Mayor de 3 Numeros";
        let num1, num2, num3;
        num1 = prompt("Digita el primer numero: ");
        num2 = prompt("Digita el segundo numero: ");
        num3 = prompt("Digita el tercer numero: ");
        if (((num1>=num2)&&(num1>=num3))){
            document.getElementById("contenido").innerHTML = "El mayor es el primer numero = " + num1;
        }
        if (((num2>=num3)&&(num2>=num1))){
            document.getElementById("contenido").innerHTML = "El mayor es el segundo numero = " + num2;
        }
        if (((num3>=num1)&&(num3>=num2))){
            document.getElementById("contenido").innerHTML = "El mayor es el tercer numero = " + num3;
        }
    }
    if(a===3){
        document.getElementById("titulo").innerHTML = "Ejemplo Switch";
        let opcion;
        opcion = prompt("Digita un numero de mes: ");
        switch (opcion) {
            case '1': document.getElementById("contenido").innerHTML = "El mes es Enero"; break;
            case '2': document.getElementById("contenido").innerHTML = "El mes es Febrero"; break;
            case '3': document.getElementById("contenido").innerHTML = "El mes es Marzo"; break;
            case '4': document.getElementById("contenido").innerHTML = "El mes es Abril"; break;
            case '5': document.getElementById("contenido").innerHTML = "El mes es Mayo"; break;
            case '6': document.getElementById("contenido").innerHTML = "El mes es Junio"; break;
            case '7': document.getElementById("contenido").innerHTML = "El mes es Julio"; break;
            case '8': document.getElementById("contenido").innerHTML = "El mes es Agosto"; break;
            case '9': document.getElementById("contenido").innerHTML = "El mes es Septiembre"; break;
            case '10': document.getElementById("contenido").innerHTML = "El mes es Octubre"; break;
            case '11': document.getElementById("contenido").innerHTML = "El mes es Noviembre"; break;
            case '12': document.getElementById("contenido").innerHTML = "El mes es Diciembre"; break;
            default: document.getElementById("contenido").innerHTML = "No existe ese numero de mes"; break;
        }
    }
};
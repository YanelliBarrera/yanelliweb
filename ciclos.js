function ciclos(a) {
    if(a===1){
        document.getElementById("titulo").innerHTML = "Pares 1-100 (FOR)";
        let i=0;
        let resultado='';
        for(i=1;i<=100;i++){
            if(i%2===0){
                resultado = resultado + " " + i; 
            }
        }
        document.getElementById("contenido").innerHTML = "Los numeros pares son: " +resultado;
    }
    if(a===2){
        document.getElementById("titulo").innerHTML = "Sumatoria 100 (FOR)";
        let i=0;
        let resultado=0;
        for(i=1;i<=100;i++){
            resultado+=i;
        }
        document.getElementById("contenido").innerHTML = "La sumatoria de los primeros 100 numeros es: " +resultado;
    }
    if(a===3){
        document.getElementById("titulo").innerHTML = "Pares 1-100 (WHILE)";
        let i=1;
        let resultado='';
        while(i<=100){
            if(i%2===0){
                resultado = resultado + " " + i; 
            }
            i++;
        }
        document.getElementById("contenido").innerHTML = "Los numeros pares son: " +resultado;
    }
    if(a===4){
        document.getElementById("titulo").innerHTML = "Sumatoria 100 (WHILE)";
        let i=0;
        let resultado=0;
        while(i<=100){
            resultado+=i; 
            i++;
        }
        document.getElementById("contenido").innerHTML = "La sumatoria de los primeros 100 numeros es: " +resultado;
    }
    if(a===5){
        document.getElementById("titulo").innerHTML = "Pares 1-100 (DO-WHILE)";
        let i=1;
        let resultado='';
        do{
            if(i%2===0){
                resultado = resultado + " " + i; 
            }
            i++;
        }while(i<=100);
        document.getElementById("contenido").innerHTML = "Los numeros pares son: " +resultado;
    }
    if(a===6){
        document.getElementById("titulo").innerHTML = "Sumatoria 100 (DO-WHILE)";
        let i=0;
        let resultado=0;
        do{
            resultado+=i; 
            i++;
        }while(i<=100);
        document.getElementById("contenido").innerHTML = "La sumatoria de los primeros 100 numeros es: " +resultado;
    }
};
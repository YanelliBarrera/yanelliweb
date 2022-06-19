function operaciones(a) {
    if(a===1){
        document.getElementById("titulo").innerHTML = "Pares - Impares";
        let num;
        num = prompt("Digite un numero: ");
        if(num%2===0){
            document.getElementById("contenido").innerHTML = "El numero "+num+" es par.";
        }else{
            document.getElementById("contenido").innerHTML = "El numero "+num+" es impar.";
        }    
    }
    if(a===2){
        document.getElementById("titulo").innerHTML = "Tablas de Multiplicar";
        let num,i;
        let t="",tabla="";
        num = prompt("Digite el numero a conocer su tabla de verdad: ");
        for(i=1;i<=10;i++){
            t = i+" x "+num+" = "+(i*num)+"<br>";
            tabla+=t;
            t="";
        }
        document.getElementById("contenido").innerHTML = tabla; 
    }
    if(a===3){
        document.getElementById("titulo").innerHTML = "Producto con sumas";
        let a=0,b=0,c=0,d=0,e=0,f=0,resultado=0;
        a = prompt("Se calculara (A+B)(C+D), digite el valor de A: ");
        b = prompt("Se calculara (A+B)(C+D), digite el valor de B: ");
        c = prompt("Se calculara (A+B)(C+D), digite el valor de C: ");
        d = prompt("Se calculara (A+B)(C+D), digite el valor de D: ");
        resultado = (parseFloat(a)+parseFloat(b))*(parseFloat(c)+parseFloat(d));
        document.getElementById("contenido").innerHTML = "El resultado del producto de sumas es: "+resultado;
    }
    if(a===4){
        document.getElementById("titulo").innerHTML = "Numero mayor en un arreglo";
        let num1, num2, num3, num4, num5, mayor,i;
		let lista;
		num1 = prompt("(1/5) Digita el primer numero: ");
		num2 = prompt("(2/5) Digita el segundo numero: ");
		num3 = prompt("(3/5) Digita el tercer numero: ");
		num4 = prompt("(4/5) Digita el cuarto numero: ");
		num5 = prompt("(5/5) Digita el quinto numero: ");
		lista = [num1, num2, num3, num4, num5];
        mayor=lista[0];
        for(i=0;i<5;i++){
            if(mayor<=lista[i]){
                mayor = lista[i];
            }
        }
        document.getElementById("contenido").innerHTML = "El numero mayor del arreglo es: "+mayor;
    }
    if(a===5){
        document.getElementById("titulo").innerHTML = "Suma de arreglos";
        let num1, num2, num3, num4, num5;
        let num6, num7, num8, num9, num10;
		let lista, resultado="";
		num1 = prompt("(1/5) Digita A[0]: ");
		num2 = prompt("(2/5) Digita A[1]: ");
		num3 = prompt("(3/5) Digita A[2]: ");
		num4 = prompt("(4/5) Digita A[3]: ");
		num5 = prompt("(5/5) Digita A[4]: ");
        num6 = prompt("(1/5) Digita B[0]: ");
		num7 = prompt("(2/5) Digita B[1]: ");
		num8 = prompt("(3/5) Digita B[2]: ");
		num9 = prompt("(4/5) Digita B[3]: ");
		num10 = prompt("(5/5) Digita B[4]: ");
		lista = [parseFloat(num1)+parseFloat(num6),parseFloat(num2)+parseFloat(num7),parseFloat(num3)+parseFloat(num8),parseFloat(num4)+parseFloat(num9),parseFloat(num5)+parseFloat(num10)];

        for(i=0;i<5;i++){
            resultado+=lista[i]+" ";
        }
        document.getElementById("contenido").innerHTML = "La suma de arreglos queda de la siguiente manera: "+resultado;
    }
    if(a===6){
        document.getElementById("titulo").innerHTML = "Media Aritmetica";
        let num1,num2,num3,num4,num5,total;
		num1 = prompt("Digita el elemento (1/5) : ");
		num2 = prompt("Digita el elemento (2/5) : ");
		num3 = prompt("Digita el elemento (3/5) : ");
		num4 = prompt("Digita el elemento (4/5) : ");
		num5 = prompt("Digita el elemento (5/5) : ");
		total = (parseFloat(num1)+parseFloat(num2)+parseFloat(num3)+parseFloat(num4)+parseFloat(num5))/5;
        document.getElementById("contenido").innerHTML = "La media aritmetica de los 5 elementos es: "+total;
    }
    if(a===7){
        document.getElementById("titulo").innerHTML = "Operacion de textos (Igualdad)";
        let text1,text2;
		text1 = prompt("Digita una cadena : ");
		text2 = prompt("Digita otra cadena : ");
        if(text1 === text2){
            document.getElementById("contenido").innerHTML = "Las cadenas SI son exactamente iguales.";
        }else{
            document.getElementById("contenido").innerHTML = "las cadenas NO son exactamente iguales.";
        }
    }
};
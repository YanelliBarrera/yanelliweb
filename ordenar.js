function ordenar(a) {
	if (a === 1) {
		document.getElementById("titulo").innerHTML = "Bubble Sort";
		let num1, num2, num3, num4, num5;
		let lista;
		let n = 5,
			i,
			k,
			aux;
		num1 = prompt("Digita el primer numero: ");
		num2 = prompt("Digita el segundo numero: ");
		num3 = prompt("Digita el tercer numero: ");
		num4 = prompt("Digita el cuarto numero: ");
		num5 = prompt("Digita el quinto numero: ");
		lista = [num1, num2, num3, num4, num5];
		// Algoritmo de burbuja
		for (k = 1; k < n; k++) {
			for (i = 0; i < n - k; i++) {
				if (lista[i] > lista[i + 1]) {
					aux = lista[i];
					lista[i] = lista[i + 1];
					lista[i + 1] = aux;
				}
			}
		}
		document.getElementById("contenido").innerHTML = "La lista ordenada es: " + lista;
	}
	if (a === 2) {
		document.getElementById("titulo").innerHTML = "Insertion Sort";
		let num1, num2, num3, num4, num5;
		let lista;
		let n = 5,
			i,
			k,
			j,
			aux;
		num1 = prompt("Digita el primer numero: ");
		num2 = prompt("Digita el segundo numero: ");
		num3 = prompt("Digita el tercer numero: ");
		num4 = prompt("Digita el cuarto numero: ");
		num5 = prompt("Digita el quinto numero: ");
		lista = [num1, num2, num3, num4, num5];
		for (k = 1; k < n; k++) {
			j = k;
			aux = lista[k];
			while (j > 0 && lista[j - 1] > aux) {
				lista[j] = lista[j - 1];
				j--;
			}
			lista[j] = aux;
		}
		document.getElementById("contenido").innerHTML = "La lista ordenada es: " + lista;
	}
	if (a === 3) {
		document.getElementById("titulo").innerHTML = "Selection Sort";
		let num1, num2, num3, num4, num5;
		let lista;
		let n = 5, i, j;
		num1 = prompt("Digita el primer numero: ");
		num2 = prompt("Digita el segundo numero: ");
		num3 = prompt("Digita el tercer numero: ");
		num4 = prompt("Digita el cuarto numero: ");
		num5 = prompt("Digita el quinto numero: ");
		lista = [num1, num2, num3, num4, num5];
		for (j = 0; j < n; ++j) {
			let i = (iMin = j);
			for (++i; i < n; ++i) {
				lista[i] < lista[iMin] && (iMin = i);
			}
			[lista[j], lista[iMin]] = [lista[iMin], lista[j]];
		}
		document.getElementById("contenido").innerHTML = "La lista ordenada es: " + lista;
	}
}

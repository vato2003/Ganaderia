var numero = prompt("ingrese primer valor");
var numero2 = prompt("ingrese el segundo valor");
var total = numero - numero2;

if (total >0 ){
    console.log("es mayor a 0");
    let imparpar = resta % 2;


    if (imparpar ==0){
        console.log("tu resultado es par");

    }
    else {
        console.log("tu resultado es impar");
    }
} else {
    console.log("es menor o igual a cero cero");
}

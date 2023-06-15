// Obtener del documento
const acumulatorScreen = document.getElementById('acumulador'),
numerosScreen = document.getElementById(`numeros`),
borrarButon = document.getElementById(`eraser-2`),
expOperadores = /\+|\-|\*|\//gi,
expNum = /[\d \.]/gi

// Declaración de variables
var num = '',
cache = '',
acumulador = '';

// Esta funcion borra el ultimo caracter de la cadena
borrarButon.addEventListener('click',()=> {
    num = num.substr(num.slice(-1));
    numerosScreen.innerHTML = num;
})

function mensaje() {
    return alert('Ingrese un valor ó un valor valido');
}

function operar() {
    
}

function filtrado(entrada) {
    
    /* Si es un operador se revisa si la variable acumulador posee 
    un valor, si no lo posee ejecuta la funcion operar donde 
    se va a guardar el valor de "num" a "acumulado" 
    alli mismo se va a filtrar para operar o para seguir añadiendo valores
    */
    if (entrada == '=') {
        if (acumulador == "") {
            return mensaje();
        }
    }

    if (expOperadores.test(entrada)) {
         
        if (acumulador !== "") return operar(entrada);
        else return mensaje();
    } 
    
    /* Aqui se valida si es un número.
    donde se va a almacenar en "num" */
    if (expNum.test(entrada)) {
        num = num + entrada;
        debugger;
        return numerosScreen.innerHTML = num;
        debugger;
    } 
    
    if (entrada == "CE") {
        return location.reload();
    } 
    
}

document.addEventListener('click', (dato) => {

    debugger;
    cache = '';

    cache = dato.target.attributes.value.nodeValue;

    console.log(cache)

    debugger;
    filtrado(cache);
    
})


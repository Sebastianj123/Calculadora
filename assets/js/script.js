// Principal
const as = document.querySelector('.a'),
divAcumulado = document.getElementById('acumulado'),
divNumeros = document.getElementById('numeros'),
expresionOperadores = /\+|-|\*|\//gi,
expresionNumeros = /\d/;

var numeros = '',
acumulador = '',
resultado = '',
res = true;

window.addEventListener('click',function(dates) {

    if (res) {
            // Obtiene el valor del input (boton)
    let valor = dates.target.attributes.value.nodeValue,
    // Comprueba si el valor del input es un operador (+, -, *, /)
    operador = expresionOperadores.test(valor);

    // Habre el condicional con la variable valor
    switch (valor) {

        // Recargar la página
        case 'CE':
            
            location.reload();
            break;
    
        // Borrar uno en uno
        case 'value':

            if (numeros == null || numeros == '') {
                
                return this.alert('Ingrese un valor');

            } else {
                
                return numeros = numeros.substring(0, numeros.length -1), 
                divNumeros.innerHTML = numeros;
            }

        // Al dar igual
        case '=':
            
            if (numeros == '' && acumulador == '') {
            
                return this.alert('Ingrese un valor');
            
            } else {

                if (numeros == null || numeros == '') {
                
                    numeros = 0;
                    acumulador += ` ${numeros}`;

                } 
            
                acumulador += ` ${numeros}`
                resultado = eval(acumulador);
                
                divNumeros.style.fontSize = '3vw';
                divAcumulado.style.fontSize = '1.5vw';
                return divAcumulado.innerHTML = acumulador,
                divNumeros.innerHTML = resultado,
                as.style.display = "block",
                res = false,
                alert('La calculadora está bloqueada, se reiniciara pronto (5s aproximadamente luego de este mensaje)'),
                setTimeout(
                    function() {
                        location.reload()
                    }, 5000);
            }

    
            // Números o operadores    
        default :

            // Si es un operador
            if (operador) {

                if (numeros != '') {
                
                    // Seleccionamos el operador en caso de que sea un operador el selecto
                    let a = valor.match(expresionOperadores);
                    // acumulador = '';
                    acumulador += `${acumulador} ${numeros} ${a}`;
                    numeros = '';

                } else {

                    alert('Ingrese un valor antes de proceder');

                }


            } else {
                
                numeros += valor; 
            }

        break;
    
    }

    divAcumulado.innerHTML = acumulador;
    divNumeros.innerHTML = numeros;
}
    }

)
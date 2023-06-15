const divAcumulado = document.getElementById('acumulado'),
divNumeros = document.getElementById('numeros'),
divOperador = document.querySelector('operador'),
expresionOperadores = /\+|-|\*|\//gi,
expresionNumeros = /\d/;

var numeros = '',
operadores = null,
acumulador = null,
resultado = null;

window.addEventListener('click',function(dates) {

    
    let filtro = dates.target.attributes.value.nodeValue,
    operador = expresionOperadores.test(filtro);
    // console.log(filtro);
    // console.log(operador + " operador");
    // console.log(expresionNumeros.test(filtro) + " numeros");
    
    switch (filtro) {

        // Recargar la página
        case 'CE':
            
            location.reload();
            break;
    
        // Borrar uno en uno
        case 'value':

            if (numeros == null | numeros == '') {
                return this.alert('Ingrese un valor');
            } else {
                return numeros = numeros.substring(0, numeros.length -1), 
                divNumeros.innerHTML = numeros;
            }

        case '=':
            
            if (numeros == null | numeros == '') {
                return this.alert('Ingrese un valor');
            } else {
                return resultado = Math.floor(acumulador,operador,numeros);
            }

            // Números o operadores
        default :
        
        if (operador) {

            if (acumulador !=  null) {

                console.log(233);

                let operadorSeleccionado1 = filtro.match(expresionOperadores);
                operadores = operadorSeleccionado1;
                divOperador.innerHTML = operadores;
                divNumeros.innerHTML = operadores + numeros;
                break;                

            } else {

                console.log(4);
                let operadorSeleccionado = filtro.match(expresionOperadores)
                operadores = operadorSeleccionado;
                acumulador = numeros;
                numeros = '';
                divAcumulado.innerHTML = acumulador;
                divNumeros.innerHTML = operadores + numeros;
                break;
            }

        } else {
            
            if (operadores =! '') {
                
                console.log(1);
                numeros = `${numeros}${filtro}`;
                divNumeros.innerHTML = numeros;
                divOperador = operadores;
                break;
            } 
            
            else {

                console.log(12);
                numeros = `${numeros}${filtro}`;
                divNumeros.innerHTML = numeros;
            
            }   

        }
    }
})
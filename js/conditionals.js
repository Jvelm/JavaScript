//! Conditionals

//Estructuras de control selectivas

//Simples

// const montoMinimo = 2000;
// let montoCompra = 1500;

// if(montoCompra >= montoMinimo) {
//     console.log('Elegible para MSI')
// }

//Doble

// const montoMinimo = 2000;
// let montoCompra = 1500;

// if (montoCompra >= montoMinimo) {
//     console.log('Elegible para MSI')
// }

// else{
//     console.log('MSI no estan disponibles')
// }

//Multiples

//   const montoMinimo = 2000;
//         let montoCompra = 1500;

//         if(montoCompra >= montoMinimo) {
//             console.log('Elegible para MSI')
//         }
//         else if(montoCompra + 100 >= 20000) {
//             console.log('Agrega $100 o mas a tu compra y accede a MSI')
//         }
//         else{
//             console.log('MIS no estan disponibles')
//         }

//Anidacion o nesting de condicionales

// const numero = prompt('Ingresa un numero a evaluar')

// if(num >= 0) {
//     //codigo
//     if (num == 0) {
//         console.log('El numero ingresado es 0')
//     }
//     else {
//         console.log('El numero es positivo')
//     }
// }

// else {
//     console.log('El numero es negativo')
// }



    //Ternary operator

        //?Sintaxis <evaluacion> ? <resultado si es verdadero> : <resultado si es falso><Resultado>

        // let notaExamen = parseInt(prompt('Ingresa tu nota aqui:'));

        // let resultado = notaExamen >= 7 ?"Felicidades pasaste" : 'Reprobaste'

        // console.log(resultado)

        // //?Nesting ternary
        // let a= -1
        // let result = a >= 0 ? 'Zero' : 'Positive' : 'negativo'
        // console.log(result) 

// Switch

// let a = 2

//     switch(a)  {
//         case 1:
//             console.log('es uno');
//             break
//         case 2:
//             console.log('es dos');
//             break
//         default:
//             console.log('no es ni uno ni dos!')
// }
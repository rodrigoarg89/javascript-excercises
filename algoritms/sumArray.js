const sumaArr = arr => {
  let result = 0;
  arr.map(item => {
    result += item;
  });
  return result;
};



const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  sum(12, 3, 4, 5, 5, 4, 8 , 8, 6, 98, 45, 48, 1, 51, 65, 48, 58, 885)
  


// function sumar([1,2,3…]) {
//     return[1,2,3...].map(n=>n+=n)
// }

let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    contador = numeros[i] + contador;
  }
  return contador;
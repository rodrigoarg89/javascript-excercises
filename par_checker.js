function par_checker(symbol_string) {
    const stack = [];
    for (let single of symbol_string) {
        if(single == '(') {
        stack.push(single);
        }
        if(single == ')'){
          if(stack.length == 0) {
            return false
          } else {
            stack.pop(single)
          }
        }
    }
  console.log(stack)
  return stack.length === 0;
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado;
}
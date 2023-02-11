function parChecker(string) {
    const stack = [];
    for (let single of string) {
        if(single == '(' || single == '{' || single == '[') {
        stack.push(single);
        }
        if(single == ')' || single == '}' || single == ']'){
          if(stack.length == 0) {
            return false
          } else {
            stack.pop(single)
          }
        }
    }
  console.log(stack)
  return stack.length === 0;
}

parChecker('()[]{}')

const decodeString = (str: string) => {
    let solution = '';
    const multiplierStack: string[] = []
    const strStack: string[] = []
    let tempMultiplier = ''

    const numberRegex = /^[0-9]+$/;

    for (const char of str){
      const isNumber = numberRegex.test(char)

      if(isNumber){
        tempMultiplier = `${tempMultiplier}${char}`
      } else if(char === '['){
        multiplierStack.push(tempMultiplier)
        tempMultiplier = ''
        strStack.push(solution)
        solution = ''
      } else if(char === ']'){
        solution = strStack.pop() + solution.repeat(Number(multiplierStack.pop()))
      } else {
        solution += char
      }
    }

    return solution;
}


export {
  decodeString
}
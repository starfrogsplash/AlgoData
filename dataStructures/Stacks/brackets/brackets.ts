

const isValidBrackets = (brackets: string) => {
    const openingBrackets = '([{'
    const closingBrackets = ')]}'
    const matchingBrackets: Record<string, string> = {')': '(',']': '[','}': '{'}
    const stack = []
    for(const bracket of brackets){
        if(openingBrackets.includes(bracket)) {
            stack.push(bracket)
        } else if (closingBrackets.includes(bracket)) {
            if (stack.length === 0) return false
            if (stack[stack.length - 1] === matchingBrackets[bracket]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}


export {
    isValidBrackets
}
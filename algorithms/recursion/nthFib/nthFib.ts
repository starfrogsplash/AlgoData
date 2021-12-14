
// recursive
//O(2^n) | O(n)
const nthFibRec = (num: number): number => {

    if (num === 2) return 1
    if (num === 1) return 0

    const fibA = nthFibRec(num - 1)
    const fibB = nthFibRec(num - 2)

    return fibA + fibB
}


//                    example nth(4)
// fib(4) = fib(3) + fib(2) + fib(1) =>  1 + 1 + 0 = 2
// 1st call fib(4) => fib(3) + fib(2) => 1 + 1 = 2
// 2nd call fib(3) => fib(2) + fib(1) => 1 + 0 = 1


// iterative
//O(n) time O(1) space
const iterativeFib = (num: Number): Number => {
    const currentFib = [0, 1]
    let counter = 3

    while (counter <= num) {
        const nextFib = currentFib[0] + currentFib[1]
        currentFib[0] = currentFib[1]
        currentFib[1] = nextFib
        counter++
    }

    return num > 1 ? currentFib[1] : currentFib[0]
}

export {
    nthFibRec,
    iterativeFib
}


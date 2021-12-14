

const nthFib = (num: number): number => {

    if (num === 2) return 1
    if (num === 1) return 0

    const fibA = nthFib(num - 1)
    const fibB = nthFib(num - 2)

    return fibA + fibB
}


//                    example nth(4)
// fib(4) = fib(3) + fib(2) + fib(1) =>  1 + 1 + 0 = 2
// 1st call fib(4) => fib(3) + fib(2) => 1 + 1 = 2
// 2nd call fib(3) => fib(2) + fib(1) => 1 + 0 = 1


export {
    nthFib
}


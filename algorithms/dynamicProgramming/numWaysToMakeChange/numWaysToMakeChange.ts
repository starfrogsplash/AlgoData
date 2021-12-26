
const numWaysToMakeChange = (n: number, denoms: number[]): number => {
    const ways = new Array(n + 1).fill(0)
    ways[0] = 1

    for(let denom of denoms ){
        for (let nthAmount = 1; nthAmount < n + 1;nthAmount++){
            if(denom <= nthAmount){
                ways[nthAmount] += ways[nthAmount - denom]
            }
        }
    }

    return ways[n]
}


export {
    numWaysToMakeChange
}
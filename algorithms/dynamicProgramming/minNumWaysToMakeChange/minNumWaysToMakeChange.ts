
const minNumWaysToMakeChange = (n: number, denoms: number[]): number => {
    const num0fCoins = new Array(n + 1).fill(Infinity)
    num0fCoins[0] = 0

    for(let denom of denoms ){
        for (let nthAmount = 0; nthAmount < num0fCoins.length; nthAmount++){
            if(denom <= nthAmount){
                num0fCoins[nthAmount] = Math.min(num0fCoins[nthAmount], num0fCoins[nthAmount - denom] + 1)
            }
        }
    }
    return num0fCoins[n]
}

export {
    minNumWaysToMakeChange
}


//O(n) time | 0(n) space
const minRewards = (scores: number[]) => {
    const rewards = scores.map(_ => 1)

    for (let i = 1; i < scores.length; i++){
        const current = scores[i]
        const previous = scores[i-1]
        if(current > previous) rewards[i] = rewards[i-1] + 1
    }

    for (let i = scores.length - 2; i >= 0; i--){
        const current = scores[i]
        const previous = scores[i+1]
        if(current > previous)rewards[i] = Math.max(rewards[i], rewards[i+1] + 1)
    }

    return rewards.reduce((a,b) => a + b)
}

export {
    minRewards
}

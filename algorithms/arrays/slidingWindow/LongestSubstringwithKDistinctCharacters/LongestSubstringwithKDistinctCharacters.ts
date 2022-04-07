
const LongestSubstringwithKDistinctCharacters = (word: string, k: number) => {
    let windowStart = 0
    let maxLength = 0
    const charFreq: Record<string, number> = {}
    let letters = ''

    for (let windowEnd=0; windowEnd < word.length; windowEnd++){
        const rightChar = word[windowEnd]

        if(!(charFreq[rightChar] in charFreq)){
            charFreq[rightChar] = 0
        }
        charFreq[rightChar]++

        while(Object.keys(charFreq).length > k){
            const leftChar = word[windowStart]
            charFreq[leftChar]--
            if(charFreq[leftChar] === 0){
                delete charFreq[leftChar]
                
            }
            windowStart++
        }

        const newMaxLength = windowEnd - windowStart + 1
        if(newMaxLength > maxLength){
            maxLength = newMaxLength
            letters = word.slice(windowStart, windowStart + maxLength)
        }
        // maxLength = Math.max(maxLength, windowEnd - windowStart + 1)

    }
    // console.log(letters)
    return letters
}

export {
    LongestSubstringwithKDistinctCharacters
}
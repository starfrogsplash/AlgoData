const LongestSubstringWithoutDup = (str: string ): string => {
    const lastSeen: Record<string, number> = {}
    let longest = [0,1]
    let startIdx = 0
    let longestSofar = str.slice(startIdx, longest[1])

    for (let i = 0; i < str.length; i++){
        const char = str[i]
        if(char in lastSeen){
            startIdx = Math.max(startIdx, lastSeen[char] + 1 )
        }
        if(longest[1] - longest[0] < (i + 1) - startIdx){
            longest = [startIdx, i + 1]
            longestSofar = str.slice(startIdx, longest[1])
        }
        
        lastSeen[char] = i
    }

    return str.slice(longest[0], longest[1])
}

//'clementisacap'

export {
    LongestSubstringWithoutDup
}

const groupAnagrams = (anagrams: string[]) => {
    const anagramsObj: Record<string, string[]> = {}

     for (const word of anagrams){
        const sortedWord = word.split('').sort().join('')
        if(anagramsObj[sortedWord]){
            anagramsObj[sortedWord].push(word)
        }else{
            anagramsObj[sortedWord] = [word]
        }
     }

    return Object.values(anagramsObj)

}


export {
    groupAnagrams
}
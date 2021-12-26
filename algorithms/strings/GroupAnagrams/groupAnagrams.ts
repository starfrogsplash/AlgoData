const groupAnagrams = (anagrams: string[]) => {
    const anagramsObj: Record<string, string[]> = {}

     for (let word of anagrams){
        let sortedWord = word.split('').sort().join('')
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
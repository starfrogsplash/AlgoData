const LongestSubstringWithoutDup = (str: string): string => {
  const lastSeen: Record<string, number> = {}
  //let longest = [0, 1]

  let [firstIdx, lastIdx] = [0, 1]
  let startIdx = 0
  let longestSofar = str.slice(startIdx, lastIdx)

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[char] + 1)
    }
    if ((lastIdx - firstIdx) < (i + 1) - startIdx) {
      // longest = [startIdx, i + 1]
      firstIdx = startIdx
      lastIdx = i + 1
      longestSofar = str.slice(startIdx, lastIdx)
    }

    lastSeen[char] = i
  }

  return str.slice(firstIdx, lastIdx)
}



//'clementisacap'

const longestSubstring = (str: string): string => {
  let longestLength = 0;
  let longestStringSoFar = '';
  let startWindow = 0;
  let endWindow = 0;
  const charIndices: Record<string, number> = {}

  while (endWindow < str.length) {
    const currChar = str[endWindow];

    if (typeof charIndices[currChar] === 'number' && charIndices[currChar] >= startWindow) {
      // "Jump" p1 to location of the duplicate character to put it on the "edge" of the window.
      startWindow = charIndices[currChar] + 1;
    }

    // Reassign the mapped index of the (once again unique) character to the current value of our leading pointer, p2.
    charIndices[currChar] = endWindow;
    endWindow++; // We continually move our leading pointer forward.
    // Determine length of current substring & update max if applicable.
    longestLength = Math.max(longestLength, endWindow - startWindow);

    if(longestStringSoFar.length < (endWindow - startWindow) ) {
      longestStringSoFar = str.slice(startWindow, endWindow)
    }

  }

  return longestStringSoFar
  // return longestLength;
}

export {
  LongestSubstringWithoutDup,
  longestSubstring
}

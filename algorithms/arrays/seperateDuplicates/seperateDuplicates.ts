

//O(n) time || 0(1)
const seperateUnique = (arr1: string[], arr2: string[]) => {
  const objA: Record<string, boolean> = {}
  const objB: Record<string, boolean> = {}

  const arrA = []
  const arrB = []
  const both = []

  for (let i = 0; i < arr1.length; i++) {
    const currentA = arr1[i]
    const currentB = arr2[i]
    objA[currentA] = true
    objB[currentB] = true
  }

  for (let i = 0; i < arr1.length; i++) {
    const currentA = arr1[i]
    const currentB = arr2[i]

    const isbInArrA = !!objA[currentB]
    const isaInArrB = !!objB[currentA]

    if (!isbInArrA) arrB.push(currentB)
    if (!isaInArrB) arrA.push(currentA)
    if (isbInArrA && isaInArrB) both.push(currentA, currentB)
  }

  return {
    arrA,
    arrB,
    both
  }
}

// result == arrA: [ 'a', 'f' ], arrB: [ 'b', 'c' ], both: [ 'e', 'd' ] 
console.log(seperateUnique(['a', 'd', 'e', 'f'], ['b', 'c', 'd', 'e']))
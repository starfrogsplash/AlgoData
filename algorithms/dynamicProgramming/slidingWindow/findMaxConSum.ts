
const findMaxConSumA = (arr: number[], k: number) => {
    let max = 0;
    let windowSum = 0;
    let windowStart=0;
    for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
        windowSum+=arr[windowEnd];
        if(windowEnd>=k-1){
          max = Math.max(windowSum,max);
          windowSum -= arr[windowStart];
          windowStart++;
        }
        // console.log(windowSum,max);
    }
    return max;
}


const findMaxConSumB = (arr: number[], k: number) => {
    let max = 0;
    let sum = 0;
    //find initial sum of first k elements
    for(let n = 0; n <  k ; n++) {
        sum +=  arr[n];      
    }
    //iterate the array once and increment the right edge
     for(let i = k; i < arr.length; i++) {    
            sum += arr[i] - arr[i-k];
            //compare if sum is more than max, if yes then replace max with new sum value
               if(sum > max) {
                   max = sum;
               }
            }
        return max;
    }
     



export {
    findMaxConSumA,
    findMaxConSumB
}
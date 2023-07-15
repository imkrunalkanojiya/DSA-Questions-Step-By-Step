module.exports = { 
    //param A : array of integers
    //param B : array of array of integers
    //return a array of integers
       solve : function(A, B){
           let even = []
           const cummulativeSum = []
           let count = 0;
           for(let i = 0 ; i < A.length ; i++){
               if(BigInt(A[i]) % BigInt(2) == 0){
                   count++
               }
               cummulativeSum.push(count)
           }
           for(let i = 0 ; i <B.length ; i++ ){
               let first = B[i][0];
               let last = B[i][1];
   
               const countInRange = cummulativeSum[last] - (first > 0 ? cummulativeSum[first - 1] : 0)
               even.push(countInRange)    
   
           }
           return even
       }
   };
   
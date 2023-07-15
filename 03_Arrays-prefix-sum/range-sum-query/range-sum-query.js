module.exports = { 
    //param A : array of integers
    //param B : array of array of integers
    //return a array of long integers
       rangeSum : function(A, B){
           const preFixSum = [];
           const rangeSum = []
           preFixSum[0] = A[0];
           for(let i = 1; i <A.length ; i++){
               preFixSum[i] = preFixSum[i - 1] + A[i]
           }
           for(let j = 0; j < B.length ; j++){
               if(B[j][0] == 0){
                   rangeSum.push(preFixSum[B[j][1]])
               }else{
                   rangeSum.push(preFixSum[B[j][1]] - preFixSum[B[j][0] - 1])
               }
   
           }
           return rangeSum
       }
   };
   
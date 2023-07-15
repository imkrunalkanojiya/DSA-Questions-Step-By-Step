module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let total = 0;
           let max = A[0]
           for(let i = 0;i< A.length;i++){
               if(A[i] > max){
                   max = A[i]
               }
           }
           for(let i = 0; i<A.length; i++){
               if(A[i] < max){
                   let currVal = max - A[i];
                   total += currVal;
               }
           }
           return total
       }
   };
   
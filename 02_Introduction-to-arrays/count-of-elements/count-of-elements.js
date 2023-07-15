module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let maxVal = A[0];
           let count = 0;
           for(let i = 0; i < A.length; i++){
               if(A[i] > maxVal){
                   maxVal = A[i]
               }
           }
           for(let i = 0; i <A.length ; i++){
               if(A[i] < maxVal){
                   count += 1;
               }
           }
           return count
       }
   };
   
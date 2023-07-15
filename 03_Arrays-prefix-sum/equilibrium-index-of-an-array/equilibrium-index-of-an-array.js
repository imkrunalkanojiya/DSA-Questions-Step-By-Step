module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
   
           let left = 0
           let right = 0
   
           for(let i = 0 ; i < A.length ; i++){
               right += A[i]
           }
   
           for(let j = 0 ; j < A.length ; j++){
               right -= A[j]
               if(right == left){
                   return j
               }
               left += A[j]
           }
   
           return -1
   
       }
   };
   
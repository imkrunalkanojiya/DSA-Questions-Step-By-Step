module.exports = { 
    //param A : array of integers
    //param B : integer
    //param C : integer
    //return a array of integers
       solve : function(A, B, C){
           let i = B;
           let j = C;
           while (i < j){
               let temp = A[i];
               A[i] = A[j];
               A[j] = temp;
               i++;
               j--
           }
           return A
       }
   };
   
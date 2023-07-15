module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let max = A[A.length - 1]
           let min = A[0]
           for(let el of A){
               if(el < min){
                   min = el;
               }
               if(el > max){
                   max = el;
               }
           }
           return Number(max + min);
       }
   };
   
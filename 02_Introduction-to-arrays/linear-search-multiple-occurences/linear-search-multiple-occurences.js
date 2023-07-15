module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       solve : function(A, B){
           let count = 0;
           for(let el of A){
               if(el == B){
                   count++;
               }
           }
           return Number(count)
       }
   };
   
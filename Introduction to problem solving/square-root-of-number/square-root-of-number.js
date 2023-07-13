module.exports = { 
    //param A : integer
    //return an integer
       solve : function(A){
           for(let i = 1; i <= A / i; i = i + 1){
               if( i == A / i){
                   return i;
               }
           }
           return -1;
       }
   };